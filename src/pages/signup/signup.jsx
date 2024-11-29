import React, { useState } from "react";
import "./signup.css";
import Navbar from "../../components/navbar/Navbar";

const Signup = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const handleSignIn = () => {
        if (!password) {
            setErrorMessage("Password cannot be empty");
        } else if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
        } else {
            setErrorMessage("");
            // Proceed with sign-in logic
        }
    };
    

    return (
        <div>
            <Navbar />
            <div className="loginContainer">
                <div className="loginWrapper">
                    <div className="loginInput">
                        <h1 className="inputTittle">Sign in or create an account</h1>
                        <span className="instruction">
                            You can sign in using your Booking.com account to access our services.
                        </span>
                        <div className="inputItem">
                            <div className="inputLable">
                                <label>Email address</label>
                            </div>
                            <input type="text" className="emailAddress" />
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
                            <button onClick={handleSignIn}>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="loginFooter"></div>
        </div>
    );
};

export default Signup;
