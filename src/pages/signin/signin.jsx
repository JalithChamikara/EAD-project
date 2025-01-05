import React, { useState } from "react";
import "./signin.css";
import Navbar from "../../components/navbar/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault(); // Prevent form submission
        
        if (!email || !password) {
            setErrorMessage(email ? "Password Cannot be Empty" : "Email Cannot be Empty");
            return;
        }
    
        try {
            const response = await axios.post(`http://localhost:8082/users/login?email=${email}&password=${password}`);
            
            // Store user data first
            await localStorage.setItem('user', JSON.stringify(response.data));
            
            // Verify storage
            const storedUser = localStorage.getItem('user');
            console.log('Stored user:', storedUser); // Debug log
            
            if (storedUser) {
                toast.success("User Logged in Successfully!");
                navigate("/");
            } else {
                throw new Error('Failed to store user data');
            }
        } catch (error) {
            console.error("Error Logging in:", error);
            setErrorMessage('Invalid email or password. Please try again.');
        }
    };

    return (
        <div>
            <Navbar />
            <ToastContainer />
            <div className="loginContainer">
                <div className="loginWrapper">
                    <div className="loginInput">
                        <h1 className="inputTittle">Sign in or create an account</h1>
                        <span className="instruction">
                            You can sign in using your Booking.com account to access our services.
                        </span>
                        <form>
                        <div className="inputItem">
                            <div className="inputLable">
                                <label>Email address</label>
                            </div>
                            <input type="email" className="emailAddress" value={email}
                            onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div className="inputItem">
                            <div className="inputLable">
                                <label>Password</label>
                            </div>
                            <div className="passwordContainer">
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    className="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span
                                    className="togglePassword"
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                >
                                    {passwordVisible ? "👁️" : "🙈"}
                                </span>
                            </div>
                        </div>
                        </form>
                        
                        {errorMessage && <div className="error">{errorMessage}</div>}
                        <div className="inputItem">
                            <button onClick={handleSignIn}>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="loginFooter"></div>
        </div>
    );
};

export default Signin;
