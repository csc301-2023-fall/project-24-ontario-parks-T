import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import AdminMain from "./AdminMain";
import { BACKENDHOST } from "./config";


const AudioEditForm = ({}) =>{

    const audio_name = useParams()["audio_name"];
    const [audioData, setAudioData] = useState(null);
    const [locations, setLocations] = useState([]);
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
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
    

    const handleChange = (e) => {
        setAudioData({
          ...audioData,
          [e.target.name]: e.target.value
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.put(`${BACKENDHOST}AdminControl/api/audio/${audio_name}/`, audioData, 
          {
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
    
    if (!audioData) {
        return <div>Loading...</div>;
    }

    const handleLocationChange = (e) => {
      if (e.target.value !== null) {
        setAudioData({
          ...audioData,
          location: e.target.value
        });
      }
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
                    <label className="col-4 col-form-label">Link To Image</label>
                    <input className="form-control col-8" name="image" onChange={handleChange} />
                </div>
                <div className="form-group row m-2">
                    <label className="col-4 col-form-label">Location</label>
                    <select className="form-control col-8" name="location_name" value={audioData.location} onChange={handleLocationChange}>
                        <option></option>
                        {locations.map((location) => (
                        <option key={location.location_name} value={location.location_id}>
                            {location.location_name}
                        </option>
                        ))}
                    </select>
                </div>
                <div className="form-group row m-2">
                    <label className="col-4 col-form-label">Season</label>
                    <select className="form-control col-8" name="season" onChange={handleChange}>
                      <option key="Spring" value="Spring">Spring</option>
                      <option key="Summer" value="Summer">Summer</option>
                      <option key="Fall" value="Fall">Fall</option>
                      <option key="Winter" value="Winter">Winter</option>
                    </select>
                </div>
                <button className="btn btn-primary m-2" type="submit">Submit</button>
                {message && <p className='text-center'>{message}</p>}
                {errorMessage && <p className='text-center text-danger'>{errorMessage}</p>}
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