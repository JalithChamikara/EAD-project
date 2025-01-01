import React, { useState } from "react";
import "./signup.css";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const role = 'user';
    const navigate = useNavigate();

    const handleSignUp = async(e) => {
        e.preventDefault(); // Prevent form submission
        if (!username) {
            setErrorMessage("Username cannot be empty");
        } else if (!email) {
            setErrorMessage("Email cannot be empty");
        } else if (!password) {
            setErrorMessage("Password cannot be empty");
        } else if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
        } else {
            try {
                const response = await axios.post('http://localhost:8082/users', {
                    username,
                    email,
                    password,
                    role
                });
                console.log('User signed up successfully:', response.data);
                toast.success('User registered successfully!',
                    {onclose: ()=> navigate('/signin')});
                // Handle successful signup (e.g., redirect to login page)
            } catch (error) {
                console.error('Error signing up:', error);
                setErrorMessage('Error signing up. Please try again.');
                // Handle signup error (e.g., display error message)
            }
        }
    };

    return (
        <div>
            <Navbar />
            <div className="loginContainer">
                <div className="loginWrapper">
                    <div className="loginInput">
                        <h1 className="inputTittle">create an account</h1>
                        <span className="instruction">
                            You can sign in using your Booking.com account to access our services.
                        </span>
                        <ToastContainer />
                        <form onSubmit={handleSignUp}>
                            <div className="inputItem">
                                <div className="inputLable">
                                    <label>User Name</label>
                                </div>
                                <input type="text" className="emailAddress" value={username}
                                onChange={(e) => setUsername(e.target.value)} required/>
                            </div>
                            <div className="inputItem">
                                <div className="inputLable">
                                    <label>Email address</label>
                                </div>
                                <input type="email" className="emailAddress" value={email} 
                                onChange={(e) => setEmail(e.target.value)} required />
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
                                    />
                                    <span
                                        className="togglePassword"
                                        onClick={() => setPasswordVisible(!passwordVisible)}
                                    >
                                        {passwordVisible ? "👁️" : "🙈"}
                                    </span>
                                </div>
                            </div>
                            <div className="inputItem">
                                <div className="inputLable">
                                    <label>Confirm Password</label>
                                </div>
                                <div className="passwordContainer">
                                    <input
                                        type={confirmPasswordVisible ? "text" : "password"}
                                        className="comPassword"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <span
                                        className="togglePassword"
                                        onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                                    >
                                        {confirmPasswordVisible ? "👁️" : "🙈"}
                                    </span>
                                </div>
                            </div>
                            {errorMessage && <div className="error">{errorMessage}</div>}
                            <div className="inputItem">
                                <button type="submit">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="loginFooter"></div>
        </div>
    );
};

export default Signup;
