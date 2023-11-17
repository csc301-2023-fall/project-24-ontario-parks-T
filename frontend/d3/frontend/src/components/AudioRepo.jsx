import React, { useState, useEffect } from "react";
import AdminMain from "./AdminMain";
import axios from "axios";


const Audios = () => {
    const [audios, setAudios] = useState([]);

    const refreshList = () => {
        axios
          .get("http://localhost:8000/AdminControl/api/audio/")
          .then((res) => setAudios(res.data))
          .catch((err) => console.log(err));
    };
    
    const handleDelete = (name) => {
        axios
          .delete(`http://localhost:8000/AdminControl/api/audio/${name}/`)
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
    audios.map((audio) => (
        <div key={audio.media_id} className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{audio.name}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <h6 className={`mr-2`}>
                        {audio.name_french}
                    </h6>
                <div>
                        <button className="btn btn-secondary ml-1 mr-2">
                            Edit
                        </button>
                        <button className="btn btn-danger ml-1 mr-2"
                        onClick={() => handleDelete(audio.name)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ))
);

  };
  
  const AudioRepo = () => {
    return (
        <div>
            <AdminMain />
            <div className="list-container">
                <Audios />
            </div>
        </div>
    );
  };
  
export default AudioRepo;