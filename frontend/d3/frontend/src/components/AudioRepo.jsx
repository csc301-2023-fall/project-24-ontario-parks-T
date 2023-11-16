import React, { useState, useEffect } from "react";
import AdminMain from "./AdminMain";
import axios from "axios";

const Audios = () => {
    const [audios, setAudios] = useState([]);
  
    useEffect(() => {
      axios
        .get("http://localhost:8000/AdminControl/api/audio/")
        .then((res) => setAudios(res.data))
        .catch((err) => console.log(err));
    }, []);
  
    return (
        audios.map((audio) => (
            <>
            <li
                key={audio.name}
                className="list-group-item d-flex justify-content-between align-items-center"
            >
                <span
                className={`todo-title mr-2`}
                name={audio.name}
                >
                {audio.name}
                </span>
                <span>
                <button
                    className="btn btn-secondary"
                >
                    Edit
                </button>
                <button
                    className="btn btn-danger"
                >
                    Delete
                </button>
                </span>
            </li>
            </>
        ))
    );
  };
  
  const AudioRepo = () => {
    return (
        <div>
            <AdminMain />
            <div style={containerStyle}>
                <Audios />
            </div>
        </div>
    );
  };
  
// const Audios = () => {
//     axios
//       .get("http://localhost:8000/AdminControl/api/audio/")
//       .then((res) => this.setState({ Audios: res.data }))
//       .catch((err) => console.log(err));
//   };

// const renderAudios = () => {
//     return Audios.map((audio) => (
//         <>
//         <AdminMain/>
//         <li
//             key={audio.name}
//             className="list-group-item d-flex justify-content-between align-items-center"
//         >
//             <span
//             className={`todo-title mr-2 `}
//             name={audio.name}
//             >
//             {audio.name}
//             </span>
//             <span>
//             <button
//                 className="btn btn-secondary mr-2"
//             >
//                 Edit
//             </button>
//             <button
//                 className="btn btn-danger"
//             >
//                 Delete
//             </button>
//             </span>
//         </li>
//         </>
//     ));
//   };

const containerStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  marginLeft:"5cm",
  marginRight:"5cm",
  padding:"1cm",
  alignItems: "center",
  justifyContent: "space-evenly",
  overflowY: "auto",
};

export default AudioRepo;