import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../sections/Navbar.jsx";
import "./LogIn.css";

const LogIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { LogIn } = useContext(AuthContext);
    
    const  handleSubmit = async (e) =>{
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
        <>
            <Navbar />
            <div className="mt-10 flex justify-center items-center min-h-screen bg-gray-100">
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4">Log In</h2>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded mt-1"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors loginBtn"
                    >
                        Log In
                    </button>

                    <h1 className="mt-4">Already have account, <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link></h1>
                </form>
            </div>
        </>
    )
}

export default LogIn;