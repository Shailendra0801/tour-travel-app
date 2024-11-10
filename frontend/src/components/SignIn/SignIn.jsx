import React, { useState } from "react";
import "./Styles/SignIn.css";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handelSubmit = (e) =>{
        e.preventDefault();
        console.log("Email", email);
        console.log("Password", password);
    };

    return (
        <div className="sign-in-container">
            <h2>Sign In</h2>
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
    )
}