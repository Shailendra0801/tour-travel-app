import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Temp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => emailjs.init("n-PDtk-55n-hiOJQ7"), []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_bvi676b";
        const templateIdSunraj = "template_jx0opyl";
        const templateIdClient = "template_pqlta56";

        try {
            setLoading(true);
            // TO Sunraj Tours and Travels
            await emailjs.send(serviceId, templateIdSunraj, {
                name,
                orderID: "123456",  
                date: "2021-09-01",
                phoneNo: "1234567890",
                paymentDone: "4000",
            });
            // TO Customer
            await emailjs.send(serviceId, templateIdClient, {
                name,
                recipient: email,
                orderID: "123456",  
                date: "2021-09-01",
                phoneNo: "1234567890",
                paymentDone: "4000",
            });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input 
                type="text" 
                name="user_name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <label>Email</label>
            <input 
                type="email" 
                name="user_email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <label>Message</label>
            <textarea 
                name="message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
            />
            <input type="submit" value="Send" disabled={loading} />
        </form>
    );
};