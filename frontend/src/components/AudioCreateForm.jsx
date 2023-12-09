import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminMain from "./AdminMain";
import { BACKENDHOST } from "./config";


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
    const [locations, setLocations] = useState([]);
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    
    useEffect(() => {
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
    
        fetchLocations();
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
          const response = await axios.post(`${BACKENDHOST}AdminControl/api/audio/`, audioData, 
          {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
          });
          console.log(response.data);
          setMessage('Audio created successfully!');
          setErrorMessage('');
        } catch (error) {
          console.error(error);
          setMessage('Audio creation failed.');
          const errorMessage = error.response && error.response.statusText ? error.response.statusText : error.message;
          setErrorMessage(errorMessage);
        }
      };
    
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
                    <input className="form-control col-8" name="name" onChange={handleChange}/>
                </div>
                <div className="form-group row m-2">
                    <label className="col-4 col-form-label">Audio Description</label>
                    <textarea className="form-control col-8" rows="5" name="description" onChange={handleChange} />
                </div>
                <div className="form-group row m-2">
                    <label className="col-4 col-form-label">Audio Name French</label>
                    <input className="form-control col-8" name="name_french" onChange={handleChange} />
                </div>
                <div className="form-group row m-2">
                    <label className="col-4 col-form-label">Audio Description French</label>
                    <textarea className="form-control col-8" rows="5" name="description_french" onChange={handleChange} />
                </div>
                <div className="form-group row m-2">
                    <label className="col-4 col-form-label">Link To Audio</label>
                    <input className="form-control col-8" name="link" onChange={handleChange} />
                </div>
                <div className="form-group row m-2">
                    <label className="col-4 col-form-label">Link To Image</label>
                    <input className="form-control col-8" name="image" onChange={handleChange} />
                </div>
                <div className="form-group row m-2">
                    <label className="col-4 col-form-label">Location</label>
                    <select className="form-control col-8" name="location_name" onChange={handleLocationChange}>
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
export default AudioCreationForm;
