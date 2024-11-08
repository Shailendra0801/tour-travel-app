import React, { useState } from "react";
import "./Styles/SignUp.css";

const SignUp = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // To handle form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    // Sign Up form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setMessage("");
        setError("");

        // Simple client-side validation
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError("Please enter a valid email address.");
            setLoading(false);
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/auth/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: formData.name, email: formData.email, password: formData.password }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage(data.message);
            } else {
                setError(data.message || "An error occurred during sign up.");
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Re-enter Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Re-enter Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Signing Up..." : "Sign Up"}
                </button>
                {message && <p className="success">{message}</p>}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
}

export default SignUp;