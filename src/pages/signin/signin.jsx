import React, { useState } from "react";
import "./signin.css";
import Navbar from "../../components/navbar/Navbar";

const Signin = () => {
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSignIn = () => {
        if (!password) {
            setErrorMessage("Password cannot be empty");
        } else {
            setErrorMessage(""); // Clear the error
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
