import React, { useState, useEffect } from "react";
import AdminMain from "./AdminMain";
import axios from "axios";
import { NavLink } from 'react-router-dom';
import { BACKENDHOST } from "./config";

// Component to display a list of audio files
const Audios = () => {
    // State hooks for audio list and error message
    const [audios, setAudios] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // Function to refresh the list of audios
    const refreshList = () => {
        axios
            .get(`${BACKENDHOST}AdminControl/api/audio/`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            })
            .then((res) => {
                // Update the audio list upon successful fetch
                setAudios(res.data);
                setErrorMessage('');
            })
            .catch((err) => {
                // Handle errors, including redirecting if not logged in
                if (err.response && err.response.status === 401) {
                    setErrorMessage('You are not logged in. Redirecting to login page...');
                    setTimeout(() => {
                        window.location.href = "/admin/login";
                    }, 500);
                } else {
                    console.error(err);
                }
            });
    };

    // Function to handle deletion of an audio file
    const handleDelete = (name) => {
        axios
            .delete(`${BACKENDHOST}AdminControl/api/audio/${name}/`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            })
            .then((res) => {
                // Log the response and refresh the list after deletion
                console.log("Delete response:", res.data);
                refreshList();
            })
            .catch((err) => console.log(err));
    };

    // useEffect hook to refresh the list on component mount
    useEffect(() => {
        refreshList();
    }, []);

    // JSX to render the list of audios
    return (
        <div>
            {/* Display any error messages */}
            <p>{errorMessage}</p>
            {/* Map over the list of audios and display each one */}
            {audios.map((audio) => (
                <div key={audio.media_id} className="card mb-3">
                    <div className="card-body">
                        {/* Audio name */}
                        <h5 className="card-title">{audio.name}</h5>
                        <div className="d-flex justify-content-between align-items-center">
                            {/* Audio name in French */}
                            <h6 className={`mr-2`}>
                                {audio.name_french}
                            </h6>
                            <div>
                                {/* Edit button */}
                                <button className="btn btn-secondary ml-1 mr-2">
                                    <NavLink className="nav-link" to={`edit/${audio.name}`}>
                                        Edit
                                    </NavLink>
                                </button>
                                {/* Delete button */}
                                <button className="btn btn-danger ml-1 mr-2"
                                    onClick={() => handleDelete(audio.name)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Main component for the audio repository
const AudioRepo = () => {
    return (
        <div>
            {/* Admin main frame component */}
            <AdminMain />
            <div className="list-container">
                {/* Including the Audios component to display the list */}
                <Audios />
            </div>
        </div>
    );
};

export default AudioRepo;
