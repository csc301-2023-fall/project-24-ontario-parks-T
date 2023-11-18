
import React, { useState } from 'react';
import axios from 'axios';
import AdminMain from "./AdminMain";


const LocationCreationForm = () =>{
    const [locationdata, setLocationData] = useState({
        location_id : '',
        location_name : '',
        location_address : '',
        location_city : '',
        location_province : '',
        location_postal_code : '',
        longitude : '',
        latitude : '',
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

    return(
        <div>
            <AdminMain />
            <form class="card" onSubmit={handleSubmit}>
                <div class="form-group">
                    <label>Location Name</label>
                    <input name="name" onChange={handleChange} placeholder="Name" />
                </div>
                <div class="form-group">
                    <label>Location Description</label>
                    <input name="description" onChange={handleChange} placeholder="description" />
                </div>
                <div class="form-group">
                    <label>Location Name French</label>
                    <input name="name_french" onChange={handleChange} placeholder="Name" />
                </div>
                <div class="form-group">
                    <label>Location Description French</label>
                    <input name="description_french" onChange={handleChange} placeholder="description french" />
                </div>
                <div class="form-group">
                    <label>Link To Location</label>
                    <input name="link" onChange={handleChange} placeholder="Link" />
                </div>
                <button class="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LocationCreationForm;