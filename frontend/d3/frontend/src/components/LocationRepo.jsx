import React, { useState, useEffect } from "react";
import AdminMain from "./AdminMain";
import axios from "axios";

const location_info = async (location_name) => {
  var locationData = new FormData();
  var notification = document.getElementById('notification');

  if (location_name === "") {
    notification.innerHTML = "Please fill in the field";
    notification.style.color = "red";
    return;
  }

  notification.innerHTML = "";

  locationData.append('location_name', location_name);
  try {
    const response = await fetch("http://localhost:8000/AdminControl/api/location/", {
      method: 'POST',
      body: locationData,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (!response.ok) {
      // Handle non-2xx responses
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const location_id = data.location_id;

    notification.innerHTML = "&check; Property created successfully";
    notification.style.color = "green";
  } catch (error) {
    console.error(error);
    notification.innerHTML = "Error creating location";
    notification.style.color = "red";
  }
};

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const refreshList = () => {
    axios
      .get("http://localhost:8000/AdminControl/api/location/", {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      })
      .then((res) => {
        setLocations(res.data);
        setErrorMessage('');
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          setErrorMessage('You are not logged in. Redirecting to login page...');
          setTimeout(() => {
            window.location.href = "/admin/login";
          }, 500);
        } else {
          console.error(err);
        }
      });
  };

  const handleDelete = (location_name) => {
    axios
      .delete(`http://localhost:8000/AdminControl/api/location/${location_name}/`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      })
      .then((res) => {
        console.log("Delete response:", res.data);
        refreshList();
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div>
      <p>{errorMessage}</p>
      {
        locations.map((location) => (
          <div key={location.location_id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{location.location_name}</h5>

              <div className="d-flex justify-content-between align-items-center">
                <span className={`mr-2`}>
                  {location.location_address}
                </span>
                <div>
                  <img
                    src={`http://localhost:8000/AdminControl/api/image/${encodeURIComponent(location.location_name.replace(' ', '%20'))}`}
                    alt={`${location.location_name} Image`}
                    style={{ maxWidth: "100%", maxHeight: "200px" }}
                  />
                </div>
                <div>
                  <button className="btn btn-secondary ml-1 mr-2">
                    Edit
                  </button>
                  <button className="btn btn-danger ml-1 mr-2"
                    onClick={() => handleDelete(location.location_name)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

const LocationRepo = () => {
  const [locationName, setLocationName] = useState("");

  return (
    <div>
      <AdminMain />
      <div style={containerStyle}>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Add new location</h5>
            <div className="d-flex justify-content-between align-items-center">
              <span className={`todo-title mr-3`} name="add new">
                <div className="mr-2">new location name:</div>
                <input name='Location Name' id='locationName' value={locationName} type='text' onChange={(e) => setLocationName(e.target.value)} />
                <div>
                  <p className="is-block mb-2 ml-2" style={{ fontSize: "15px" }} id="notification"> </p>
                </div>
              </span>

              <div className="column block has-text-centered">
                <button className="btn btn-secondary ml-1 is-link" type="register" value="Create new location" id="propertyLocation" onClick={() => location_info(locationName)} readOnly>
                  Create new location
                </button>
              </div>

            </div>
          </div>
        </div>
        <Locations />
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

export default LocationRepo;
