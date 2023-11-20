import React, { useState } from 'react';
import axios from 'axios';
import AdminMain from "./AdminMain";

const LocationCreationForm = () => {
    const [locationData, setLocationData] = useState({
        location_id: '',
        location_name: '',
        location_address: '',
        location_city: '',
        location_province: '',
        location_postal_code: '',
        longitude: '',
        latitude: '',
    });
    const [submissionStatus, setSubmissionStatus] = useState('idle'); // State for tracking submission status

    const handleChange = (e) => {
        setLocationData({
            ...locationData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/AdminControl/api/location/', locationData,
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

    return (
        <div>
            <AdminMain />
            <form className="card" onSubmit={handleSubmit}>
                {/* Form fields */}
                <div className="form-group">
                    <label>Location Name</label>
                    <input name="location_name" type="text" onChange={handleChange} placeholder="Location Name" />
                </div>

                <div className="form-group">
                    <label>Location Address</label>
                    <input name="location_address" type="text" onChange={handleChange} placeholder="Address" />
                </div>

                <div className="form-group">
                    <label>Location City</label>
                    <input name="location_city" type="text" onChange={handleChange} placeholder="City" />
                </div>

                <div className="form-group">
                    <label>Location Province</label>
                    <input name="location_province" type="text" onChange={handleChange} placeholder="Province" />
                </div>

                <div className="form-group">
                    <label>Location Postal Code</label>
                    <input name="location_postal_code" type="text" onChange={handleChange} placeholder="Postal Code" />
                </div>

                <div className="form-group">
                    <label>Longitude</label>
                    <input name="longitude" type="text" onChange={handleChange} placeholder="Longitude" />
                </div>

                <div className="form-group">
                    <label>Latitude</label>
                    <input name="latitude" type="text" onChange={handleChange} placeholder="Latitude" />
                </div>

                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            {/* Feedback Messages */}
            {submissionStatus === 'success' && <div className="alert alert-success">Location created successfully!</div>}
            {submissionStatus === 'error' && <div className="alert alert-danger">Error creating location. Please try again.</div>}
        </div>
    );
};

export default LocationCreationForm;
