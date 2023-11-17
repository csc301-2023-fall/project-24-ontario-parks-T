import React, { useState, useEffect } from "react";
import AdminMain from "./AdminMain";
import axios from "axios";

const Locations = () => {
    const [locations, setLocations] = useState([]);

    const refreshList = () => {
        axios
          .get("/AdminControl/api/location/")
          .then((res) => setLocations(res.data))
          .catch((err) => console.log(err));
    };
    
    const handleDelete = (location_id) => {
        axios
          .delete(`/AdminControl/api/location/${location_id}/`)
          .then((res) => {
            console.log("Delete response:", res.data);
            refreshList();
          })
          .catch((err) => console.log(err));
    };

    useEffect(() => {
        refreshList();
      }, []);

    return (
        locations.map((location) => (
            <div key={location.location_id} className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{location.location_name}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className={`mr-2`}>
                            {location.location_address}
                        </span>
                        <div>
                            <button className="btn btn-secondary ml-1 mr-2">
                                Edit
                            </button>
                            <button className="btn btn-danger ml-1 mr-2"
                            onClick={() => handleDelete(location.location_id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ))
    );

};

const LocationRepo = () => {
    return (
        <div>
            <AdminMain />
            <div style={containerStyle}>
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">Add new location</h5>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className={`todo-title mr-2`} name="add new">
                                Add new location
                            </span>
                            <div>
                                <button className="btn btn-secondary ml-1 mr-2">
                                    Add
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