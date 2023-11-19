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
            <div style={containerStyle}>
            <form className="card" onSubmit={handleSubmit}>
                <div className="form-group row m-2">
                    <label className="col-4 col-form-label">Audio Name</label>
                    <input className="form-control col-8" name="name" onChange={handleChange} value={audioData.name} />
                </div>
                <div className="form-group row m-2">
                    <label className="col-4 col-form-label">Audio Description</label>
                    <textarea className="form-control col-8" rows="5" name="description" onChange={handleChange}  value={audioData.description}  />
                </div>
                <div className="form-group row m-2">
                    <label className="col-4 col-form-label">Audio Name French</label>
                    <input className="form-control col-8" name="name_french" onChange={handleChange}  value={audioData.name_french}  />
                </div>
                <div className="form-group row m-2">
                    <label className="col-4 col-form-label">Audio Description French</label>
                    <textarea className="form-control col-8" rows="5" name="description_french" onChange={handleChange}  value={audioData.description_french}  />
                </div>
                <div className="form-group row m-2">
                    <label className="col-4 col-form-label">Link To Audio</label>
                    <input className="form-control col-8" name="link" onChange={handleChange}  value={audioData.link}  />
                </div>
                <div className="form-group row m-2">
                    <label className="col-4 col-form-label">Location</label>
                    <select className="form-control col-8" name="location_name" value={audioData.location.location_name} onChange={handleLocationChange}>
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
        </div>
    )
}
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