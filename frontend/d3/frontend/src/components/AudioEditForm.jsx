import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import AdminMain from "./AdminMain";


const AudioEditForm = ({}) =>{

    const audio_name = useParams()["audio_name"];
    const [audioData, setAudioData] = useState(null);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchAudioData = async () => {
          try {
            const response = await axios.get(`http://localhost:8000/AdminControl/api/audio/${audio_name}/`);
            setAudioData(response.data);
          } catch (error) {
            console.error(error);
          }
        };

        const fetchLocations = async () => {
            try {
              const response = await axios.get('http://localhost:8000/AdminControl/api/location/');
              setLocations(response.data);
            } catch (error) {
              console.error(error);
            }
          };
    
        fetchAudioData();
        fetchLocations();
      }, [audio_name]);
    

    const handleChange = (e) => {
        setAudioData({
          ...audioData,
          [e.target.name]: e.target.value
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.put(`http://localhost:8000/AdminControl/api/audio/${audio_name}/`, audioData);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };
    
    if (!audioData) {
        return <div>Loading...</div>;
    }

    const handleLocationChange = (e) => {
        setAudioData({
          ...audioData,
          location: e.target.value
        });
      };

    return(
        <div>
            <AdminMain />
            <form className="card" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Audio Name</label>
                    <input name="name" onChange={handleChange} value={audioData.name} />
                </div>
                <div className="form-group">
                    <label>Audio Description</label>
                    <input name="description" onChange={handleChange}  value={audioData.description}  />
                </div>
                <div className="form-group">
                    <label>Audio Name French</label>
                    <input name="name_french" onChange={handleChange}  value={audioData.name_french}  />
                </div>
                <div className="form-group">
                    <label>Audio Description French</label>
                    <input name="description_french" onChange={handleChange}  value={audioData.description_french}  />
                </div>
                <div className="form-group">
                    <label>Link To Audio</label>
                    <input name="link" onChange={handleChange}  value={audioData.link}  />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <select name="location_name" value={audioData.location.location_name} onChange={handleLocationChange}>
                        {locations.map((location) => (
                        <option key={location.location_name} value={location.location_name}>
                            {location.location_name}
                        </option>
                        ))}
                    </select>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AudioEditForm;