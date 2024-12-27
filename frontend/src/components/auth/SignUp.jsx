import React, { useContext, useState } from "react";
import "./SignUp.css";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../sections/Navbar";

const SignUp = () => {
    const { SignUp, user } = useContext(AuthContext);
    const navigate = useNavigate();

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
            const result = await SignUp(formData.name, formData.email, formData.password);
            if (result === "success") {
                setMessage("Sign up successful!");
                setFormData({ name: "", email: "", password: "", confirmPassword: "" });
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            } else {
                console.error(result);
                setError(result);
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Navbar />
            <div className="mt-10 flex justify-center items-center min-h-screen bg-gray-100">
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                    {message && <div className="bg-green-100 text-green-700 p-2 rounded mb-4">{message}</div>}
                    {error && <div className="bg-red-100 text-red-700 p-2 rounded mb-4">{error}</div>}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors signupBtn"
                        disabled={loading}
                    >
                        {loading ? "Signing up..." : "Sign Up"}
                    </button>

                    <h1 className="mt-4">Already have account, <Link to="/login" className="text-blue-500 hover:underline">Login</Link></h1>
                </form>
            </div>
        </>
    );
};

export default SignUp;