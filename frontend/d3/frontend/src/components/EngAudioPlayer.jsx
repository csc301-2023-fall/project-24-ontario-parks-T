import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import EngUserPageMainFrame from "./EngUserMain";


const EngAudioPlay = () => {
    const host = "http://localhost:8000"

    // get the audio id from scanned
    const location_id = useParams()["location_id"];

    const [audioPath, setAudioPath] = useState("");
    const [audioName, setAudioName] = useState("Default Name");
    const [audioDescription, setAudioDescription] = useState("This is a default example description.");
    const [audioImagePath, setAudioImagePath] = useState("C:\Users\v2-Za\Desktop\= =\University\grade 4\CSC301\project-24-ontario-parks-T\frontend\d3\frontend\src\Ontario-Parks-Title.jpg");
    const [currSeason, setCurrSeason] = useState("Spring");

    console.log("audioID: " + location_id);

    // get the audio data
    // fetch(host + "/location/get/" + location_id, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // }
    // ).then((response) => {
    //     if (response.ok) {
    //         return response.json();
    //     }
    //     else {
    //         throw new Error("Failed to get audio data");
    //     }
    // }
    // ).then((data) => {
    //     setAudioPath(data["path"]);
    //     setAudioName(data["name"]);
    //     setAudioImage(data["image"]);
    // })

    // return the audio player
    return (
        <>
            <EngUserPageMainFrame season={currSeason} location_id={location_id} />

            <div className="mx-5" style={{height: 5 + "rem"}}>

            </div>
            
            <div className="row">
                <div className="col-3"></div>
                <div className="container col-md-auto">
                    <div className="card" style={{width: 24 + "rem"}}>
                        <img className="mx-auto d-block img-fluid" src="" alt="" style={{width: 20 + "rem", height: 20 + "rem"}}/>
                        <div className="card-body">
                            <h5 className="card-title"> {audioName} </h5>
                            <p className="card-text">
                                {audioDescription}
                            </p>
                            <div className="text-center">
                                <audio id="dynamicAudio" controls>
                                    <source src={audioPath} type="audio/mpeg"/>
                                </audio>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </>
    );
}

export default EngAudioPlay;
