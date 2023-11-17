import React, { useState, useEffect } from "react";
import AdminMain from "./AdminMain";
import axios from "axios";

const Locations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/AdminControl/api/location/")
            .then((res) => setLocations(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        locations.map((location) => (
            <div key={location.name} className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{location.name}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className={`todo-title mr-2`} name={location.name}>
                            {location.name}
                        </span>
                        <div>
                            <button className="btn btn-secondary ml-1 mr-2">
                                Edit
                            </button>
                            <button className="btn btn-danger ml-1 mr-2">
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