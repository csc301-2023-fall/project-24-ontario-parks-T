import React, { useState } from 'react';
import axios from 'axios';
import AdminMain from "./AdminMain";


const AudioCreationForm = () =>{
    const [audioData, setAudioData] = useState({
        name: '',
        link: '',
        type: 'audio',
        description: '',
        image: 'default.jpg',
        season: 'Spring',
        year: null,
        month: null,
        day: null,
        longitude: null,
        latitude: null,
        name_french: '',
        description_french: '',
      });
    

    const handleChange = (e) => {
        setAudioData({
          ...audioData,
          [e.target.name]: e.target.value
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8000/AdminControl/api/audio/', audioData);
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
                    <label>Audio Name</label>
                    <input name="name" onChange={handleChange} placeholder="Name" />
                </div>
                <div class="form-group">
                    <label>Audio Description</label>
                    <input name="description" onChange={handleChange} placeholder="description" />
                </div>
                <div class="form-group">
                    <label>Audio Name French</label>
                    <input name="name_french" onChange={handleChange} placeholder="Name" />
                </div>
                <div class="form-group">
                    <label>Audio Description French</label>
                    <input name="description_french" onChange={handleChange} placeholder="description french" />
                </div>
                <div class="form-group">
                    <label>Link To Audio</label>
                    <input name="link" onChange={handleChange} placeholder="Link" />
                </div>
                <button class="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AudioCreationForm;