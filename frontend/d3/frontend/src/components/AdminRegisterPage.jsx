import React from "react";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { backendAPI } from "./API";

import AdminPageMainFrame from "./AdminMain";
import LoginInput from "./LoginInput";

const AdminRegisterPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [sMessage, setSMessage] = useState('');
    const navigate = useNavigate();

    const Register = (username, password, email,navigate) => {
        // check if the username and password is valid
        var bad = false;
        const username_not = document.getElementById("Username_notification");
        const pwd_not = document.getElementById("Password_notification");
        const email_not = document.getElementById("Email_notification");

        if (username === "") {
            username_not.innerHTML = "Please enter your username";
            bad = true;
        }
        else (
            username_not.innerHTML = ""
        )

        if (password === "") {
            pwd_not.innerHTML = "Please enter your password";
            bad = true;
        }
        else (
            pwd_not.innerHTML = ""
        )

        if (email === "") {
            email_not.innerHTML = "Please enter your email";
            bad = true;
        }
        else (
            email_not.innerHTML = ""
        )

        if (bad) {
            return;
        }
        
        username_not.innerHTML = "";
        pwd_not.innerHTML = "";
        email_not.innerHTML = "";

        var data = new FormData();
        data.append("username", username);
        data.append("password", password);
        data.append("email", email);
    
        fetch(`${backendAPI}AdminControl/create/`, {
            method: "POST",
            body: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
              },
            
        })
        .then(response => {
            if (response.status === 201) {

                setSMessage('New account created');
                setErrorMessage('');
            } 
            else if(response.status === 400){
                    setSMessage('');
                    setErrorMessage('You are not inputting valid input');

            }
            else {

                console.error("Registration failed. Status code:", response.status);
            }
        })
        .catch((err) => {
            if (err.response && err.response.status === 401) {
              setErrorMessage('You are not logged in. Redirecting to login page...');
              setTimeout(() => {
                window.location.href = "/admin/login";
              }, 500);
            } 
            else{

              console.error(err);
            }
          });
    }
        
    

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
                                        <LoginInput input_lable_value="Username" 
                                        input_value={username} 
                                        update={setUsername} 
                                        placeholder_value="" 
                                        type_value="text" 
                                        is_required={true} />
                                </div>
                                <div className="mb-3">
                                        <LoginInput input_lable_value="Password" 
                                        input_value={password} 
                                        update={setPassword} 
                                        placeholder_value="" 
                                        type_value="password" 
                                        is_required={true} />
                                </div>
                                <div className="mb-3">
                                        <LoginInput input_lable_value="Email" 
                                        input_value={email} 
                                        update={setEmail} 
                                        placeholder_value="" 
                                        type_value="email" 
                                        is_required={true} />
                                </div>
                                <p style={{ color: 'red' }}>{errorMessage}</p>
                                <p style={{ color: 'green' }}>{sMessage}</p>
                                <div className="mb-3">
                                    <button type="button" className="btn btn-secondary" style={{marginLeft: 0 + "px"}}
                                    onClick={() => {
                                        Register(username, password,email, navigate);
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