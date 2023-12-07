import React from "react";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BACKENDHOST } from "./config";

import AdminPageMainFrame from "./AdminMain";
import LoginInput from "./LoginInput";

// Component for admin login page
const AdminLoginPage = () => {

    // State hooks for managing username, password, and authentication token
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const navigate = useNavigate();

    // Function to handle login
    const Login = (username, password, navigate) => {
        // Validation flags and elements for displaying error messages
        var bad = false;
        const username_not = document.getElementById("Username_notification");
        const pwd_not = document.getElementById("Password_notification");

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

        // Return early if validation fails
        if (bad) {
            return;
        }
        
        // Clear error messages
        username_not.innerHTML = "";
        pwd_not.innerHTML = "";

        // Prepare form data for POST request
        var data = new FormData();
        data.append("username", username);
        data.append("password", password);
    
        // Send POST request to server for authentication
        fetch(`${BACKENDHOST}AdminControl/api/token/`, {
            method: "POST",
            body: data,
        })
        .then(respones => respones.json())
        .catch(error => console.error("Error:", error))
        .then(data => {
    
            console.log(data);
            
            // Handle successful login
            if (data.access){
                localStorage.setItem("token", data.access);
                localStorage.setItem("refresh", data.refresh);
                setToken(data.access);
                navigate("/admin/locations");
            }

            // Handle login error
            if (data.detail){
                pwd_not.innerHTML = "Username or password is incorrect";
            }
        });
    }

    // Redirect to admin/locations if already authenticated
    useEffect(() => {
        if (token) {
            navigate("/admin/locations");
        }
    });

    // JSX for rendering the login page
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
                                <div className="mb-3">
                                    {/* Username input */}
                                    <LoginInput input_lable_value="Username" 
                                        input_value={username} 
                                        update={setUsername} 
                                        placeholder_value="" 
                                        type_value="text" 
                                        is_required={true} />
                                </div>
                                <div className="mb-3">
                                    {/* Password input */}
                                    <LoginInput input_lable_value="Password" 
                                        input_value={password} 
                                        update={setPassword} 
                                        placeholder_value="" 
                                        type_value="password" 
                                        is_required={true} />
                                </div>
                                <div className="mb-3">
                                    {/* Login button */}
                                    <button type="button" className="btn btn-secondary" style={{marginLeft: 0 + "px"}}
                                    onClick={() => {
                                        Login(username, password, navigate);
                                    }}
                                    >
                                        Login
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

export default AdminLoginPage;
