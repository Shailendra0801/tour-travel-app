import React, { useEffect, useState } from "react";
import { useSearchParams} from "react-router-dom";
import "./Styles/VerifyMail.css";

const VerifyMail = () => {
    const [searchParams] = useSearchParams();
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const verifyMail = async () => {
            const token = searchParams.get("token");
            if (token) {
                try{
                    const response = await fetch(`http://localhost:5000/api/auth/verify-email?token=${token}`);
                    const data = await response.json();
                    if (response.ok){
                        setMessage(data.message);
                        setError("");
                    }
                    else{
                        setError(data.error);
                        setMessage("");
                    }
                }
                catch (error) {
                    setError(error);
                }
            }
        };
        verifyMail()
    }, [searchParams]);

    return (
        <div className="verifyMail-container">
            <h2>Email Verification</h2>
            {message && <p className="success">{message}</p>}
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default VerifyMail;