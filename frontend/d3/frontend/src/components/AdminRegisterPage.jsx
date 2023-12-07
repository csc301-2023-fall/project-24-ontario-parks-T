import React from "react";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BACKENDHOST } from "./config";

import AdminPageMainFrame from "./AdminMain";
import LoginInput from "./LoginInput";

// Component for the admin registration page
const AdminRegisterPage = () => {

    // State hooks for managing username, password, email, error message, and success message
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [sMessage, setSMessage] = useState('');
    const navigate = useNavigate();

    // Function to handle registration
    const Register = (username, password, email, navigate) => {
        // Validation flags and elements for displaying error messages
        var bad = false;
        const username_not = document.getElementById("Username_notification");
        const pwd_not = document.getElementById("Password_notification");
        const email_not = document.getElementById("Email_notification");

        // Username validation
        if (username === "") {
            username_not.innerHTML = "Please enter your username";
            bad = true;
        } else {
            username_not.innerHTML = ""
        }

        // Password validation
        if (password === "") {
            pwd_not.innerHTML = "Please enter your password";
            bad = true;
        } else {
            pwd_not.innerHTML = ""
        }

        // Email validation
        if (email === "") {
            email_not.innerHTML = "Please enter your email";
            bad = true;
        } else {
            email_not.innerHTML = ""
        }

        // Return early if validation fails
        if (bad) {
            return;
        }

        // Clear error messages
        username_not.innerHTML = "";
        pwd_not.innerHTML = "";
        email_not.innerHTML = "";

        // Prepare form data for POST request
        var data = new FormData();
        data.append("username", username);
        data.append("password", password);
        data.append("email", email);
    
        // Send POST request to server for registration
        fetch(`${BACKENDHOST}AdminControl/create/`, {
            method: "POST",
            body: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then(response => {
            if (response.status === 201) {
                // Set success message on successful account creation
                setSMessage('New account created');
                setErrorMessage('');
            } else if(response.status === 400){
                // Set error message for invalid input
                setSMessage('');
                setErrorMessage('You are not inputting valid input');
            } else {
                // Log error for unexpected response status
                console.error("Registration failed. Status code:", response.status);
            }
        })
        .catch((err) => {
            if (err.response && err.response.status === 401) {
                // Redirect to login page if not authenticated
                setErrorMessage('You are not logged in. Redirecting to login page...');
                setTimeout(() => {
                    window.location.href = "/admin/login";
                }, 500);
            } else {
                // Log any other errors
                console.error(err);
            }
        });
    }

    // JSX for rendering the registration page
    return (
        <>
            <AdminPageMainFrame />

            <div className="container">
                <div className="row" style={{height: 4 + "rem"}}>  
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    </div>

                    <div className="col-5">
                        <div className="card p-5" >
                            <form>
                                {/* Username input */}
                                <div className="mb-3">
                                    <LoginInput input_lable_value="Username" 
                                        input_value={username} 
                                        update={setUsername} 
                                        placeholder_value="" 
                                        type_value="text" 
                                        is_required={true} />
                                </div>
                                {/* Password input */}
                                <div className="mb-3">
                                    <LoginInput input_lable_value="Password" 
                                        input_value={password} 
                                        update={setPassword} 
                                        placeholder_value="" 
                                        type_value="password" 
                                        is_required={true} />
                                </div>
                                {/* Email input */}
                                <div className="mb-3">
                                    <LoginInput input_lable_value="Email" 
                                        input_value={email} 
                                        update={setEmail} 
                                        placeholder_value="" 
                                        type_value="email" 
                                        is_required={true} />
                                </div>
                                {/* Display error or success messages */}
                                <p style={{ color: 'red' }}>{errorMessage}</p>
                                <p style={{ color: 'green' }}>{sMessage}</p>
                                {/* Register button */}
                                <div className="mb-3">
                                    <button type="button" className="btn btn-secondary" style={{marginLeft: 0 + "px"}}
                                        onClick={() => {
                                            Register(username, password, email, navigate);
                                        }}
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col">
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminRegisterPage;
