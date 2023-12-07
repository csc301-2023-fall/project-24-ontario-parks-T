import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import AdminMain from "./AdminMain";
import { BACKENDHOST } from "./config";

// Component for editing an existing audio record
const AudioEditForm = () => {
    // Extracting the audio name from the URL parameters
    const audio_name = useParams()["audio_name"];
    // State hooks for audio data, location list, messages, and error messages
    const [audioData, setAudioData] = useState(null);
    const [locations, setLocations] = useState([]);
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // useEffect to fetch audio data and locations on component mount or when audio_name changes
    useEffect(() => {
        // Function to fetch specific audio data
        const fetchAudioData = async () => {
            try {
                const response = await axios.get(`${BACKENDHOST}AdminControl/api/audio/${audio_name}/`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    }
                });
                setAudioData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        // Function to fetch list of locations
        const fetchLocations = async () => {
            try {
                const response = await axios.get(`${BACKENDHOST}AdminControl/api/location/`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    }
                });
                setLocations(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAudioData();
        fetchLocations();
    }, [audio_name]);

    // Function to handle changes in form inputs
    const handleChange = (e) => {
        setAudioData({
            ...audioData,
            [e.target.name]: e.target.value
        });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${BACKENDHOST}AdminControl/api/audio/${audio_name}/`, audioData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            });
            console.log(response.data);
            setMessage('Audio update was successful!');
            setErrorMessage('');
        } catch (error) {
            console.error(error);
            setMessage('Audio update was not successful.' || error.message);
            const errorMessage = error.response && error.response.statusText ? error.response.statusText : error.message;
            setErrorMessage(errorMessage);
        }
    };

    // Display loading message if audio data is not yet fetched
    if (!audioData) {
        return <div>Loading...</div>;
    }

    // Function to handle changes in the location dropdown
    const handleLocationChange = (e) => {
        if (e.target.value !== null) {
            setAudioData({
                ...audioData,
                location: e.target.value
            });
        }
    };

    // JSX for rendering the audio edit form
    return (
        <div>
            <AdminMain />
            <div style={containerStyle}>
                <form className="card" onSubmit={handleSubmit}>
                    {/* Form fields for editing audio data */}
                    {/* Each input field captures specific data and updates the audioData state */}
                    {/* ... input fields for name, description, etc. ... */}
                    {/* Submit button */}
                    <button className="btn btn-primary m-2" type="submit">Submit</button>
                    {/* Display success or error messages */}
                    {message && <p className='text-center'>{message}</p>}
                    {errorMessage && <p className='text-center text-danger'>{errorMessage}</p>}
                </form>
            </div>
        </div>
    )
}
// Style for the form container
const containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginLeft: "5cm",
    marginRight: "5cm",
    padding: "1cm",
    alignItems: "center",
    justifyContent: "space-evenly",
    overflowY: "auto",
};
export default AudioEditForm;
