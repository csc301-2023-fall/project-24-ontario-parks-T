import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import AdminMain from "./AdminMain";

const LocationEditForm = () => {
    const location_name = useParams()["location_name"];
    const [locationData, setLocationData] = useState(null);
    const [submissionStatus, setSubmissionStatus] = useState('idle'); // State for tracking submission status

    useEffect(() => {
        const fetchLocationData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/AdminControl/api/location/${location_name}/`);
                setLocationData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchLocationData();
    }, [location_name]);

    const handleChange = (e) => {
        setLocationData({
            ...locationData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8000/AdminControl/api/location/${location_name}/`, locationData, 
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            });
            console.log(response.data);
            setSubmissionStatus('success'); // Set status to success on successful submission
        } catch (error) {
            console.error(error);
            setSubmissionStatus('error'); // Set status to error if there's an error
        }
    };

    if (!locationData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <AdminMain />
            <div style={containerStyle}>
                <form className="card" onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Location Address</label>
                        <input name="location_address" type="text" onChange={handleChange} value={locationData.location_address} />
                    </div>

                    <div className="form-group">
                        <label>Location Name</label>
                        <input name="location_name" type="text" onChange={handleChange} value={locationData.location_name} />
                    </div>

                    <div className="form-group">
                        <label>Location City</label>
                        <input name="location_city" type="text" onChange={handleChange} value={locationData.location_city} />
                    </div>

                    <div className="form-group">
                        <label>Location Province</label>
                        <input name="location_province" type="text" onChange={handleChange} value={locationData.location_province} />
                    </div>

                    <div className="form-group">
                        <label>Location Postal Code</label>
                        <input name="location_postal_code" type="text" onChange={handleChange} value={locationData.location_postal_code} />
                    </div>

                    <div className="form-group">
                        <label>Longitude</label>
                        <input name="longitude" type="text" onChange={handleChange} value={locationData.longtitude} />
                    </div>

                    <div className="form-group">
                        <label>Latitude</label>
                        <input name="latitude" type="text" onChange={handleChange} value={locationData.latitude} />
                    </div>


                    {/* Add more input fields as needed for other location attributes */}
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
                {/* Feedback Messages */}
                {submissionStatus === 'success' && <div className="alert alert-success">Location updated successfully!</div>}
                {submissionStatus === 'error' && <div className="alert alert-danger">Error updating location. Please try again.</div>}
            </div>
        </div>
    );
};

const containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginLeft: "5cm",
    marginRight: "5cm",
    padding: "1cm",
    alignItems: "center",
    justifyContent: "space-evenly",
    overflowY: "auto",
};

export default LocationEditForm;
