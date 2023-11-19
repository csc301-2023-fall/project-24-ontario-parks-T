
import React, { useState } from 'react';
import axios from 'axios';
import AdminMain from "./AdminMain";

const LocationCreationForm = () => {
    const [locationdata, setLocationData] = useState({
        location_id: '',
        location_name: '',
        location_address: '',
        location_city: '',
        location_province: '',
        location_postal_code: '',
        longitude: '',
        latitude: '',
    });

    const handleChange = (e) => {
        setLocationData({
            ...locationdata,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/AdminControl/api/location/', locationdata);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <AdminMain />
            <form className="card" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Location Name</label>
                    <input name="location_name" onChange={handleChange} placeholder="Location Name" />
                </div>

                <div className="form-group">
                    <label>Location Address</label>
                    <input name="location_address" onChange={handleChange} placeholder="Address" />
                </div>
                <div className="form-group">
                    <label>Location City</label>
                    <input name="location_city" onChange={handleChange} placeholder="City" />
                </div>
                <div className="form-group">
                    <label>Location Province</label>
                    <input name="location_province" onChange={handleChange} placeholder="Province" />
                </div>
                <div className="form-group">
                    <label>Location Postal Code</label>
                    <input name="location_postal_code" onChange={handleChange} placeholder="Postal Code" />
                </div>
                <div className="form-group">
                    <label>Longitude</label>
                    <input name="longitude" onChange={handleChange} placeholder="Longitude" />
                </div>
                <div className="form-group">
                    <label>Latitude</label>
                    <input name="latitude" onChange={handleChange} placeholder="Latitude" />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LocationCreationForm;
