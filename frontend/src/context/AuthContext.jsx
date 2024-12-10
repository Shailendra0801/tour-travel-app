import React, { createContext, useState, useEffect } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile , sendEmailVerification} from "firebase/auth";
import emailjs from '@emailjs/browser';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => emailjs.init("n-PDtk-55n-hiOJQ7"), []);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                const { displayName, email } = currentUser;
                setUser({ displayName, email });
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const SignUp = async (name, email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            if (auth.currentUser) {
                await updateProfile(auth.currentUser, { displayName: name });
            }
            await sendEmailVerification(auth.currentUser);
            setUser(user);
            return "success";
        } catch (error) {
            return error.code;
        }
    };

    const SignOut = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Sign out error:", error.message);
        }
    };

    const LogIn = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const { displayName, email: userEmail } = user;
            console.log(userCredential)
            setUser({ displayName, email: userEmail });
            return "success";
        } catch (error) {
            return error.message;
        }
    };

    const sendMailToCustomer = async (res) => {
        const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
        const templateCustomer = import.meta.env.VITE_EMAIL_TEMPLATE_ID_CUSTOMER;
        const templateSunRaj = import.meta.env.VITE_EMAIL_TEMPLATE_ID_SUNRAJ;

        try {
            // TO Sunraj Tours and Travels
            await emailjs.send(serviceId, templateSunRaj, {
                date: res.date,
                carType: res.carType,
                numMembers: res.numMembers,
                name : res.name,
                paymentDone: res.paymentDone,
                paymentId: res.paymentId,
                orderID: res.orderID,  
                phoneNo: res.phone,
            });
            // TO Customer
            await emailjs.send(serviceId, templateCustomer, {
                recipient: user.email,
                date: res.date,
                carType: res.carType,
                numMembers: res.numMembers,
                name : res.name,
                paymentDone: res.paymentDone,
                paymentId: res.paymentId,
                orderID: res.orderID,  
                phoneNo: res.phone,
            });

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ user, SignUp, LogIn, SignOut, sendMailToCustomer }}>
            {!loading && children}
        </AuthContext.Provider>
    );
}