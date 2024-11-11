import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { LogIn } = useContext(AuthContext);
    
    const  handelSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await LogIn(email, password);
            if(response === "success"){
                console.log("Login Success");
                navigate("/");
            }
        }
        catch(error){
            console.log(error);
        }        
    };

    return (
        <div className="h-screen w-screen FLEX">
            <div className="sign-in-container">
                <h2>Log In</h2>
                <form onSubmit={handelSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn">Sign In</button>
                </form>
                <p className="register-link">
                    Don&apos;t have an account? <a href="/signup">Sign Up</a>
                </p>
            </div>
        </div>
    )
}

export default LogIn;