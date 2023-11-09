import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import FrenchUserPageMainFrame from "./FrenchUserMain";


const FrenchAudioPlayer = () => {
    const host = "http://localhost:8000"

    // get the audio id from scanned
    var location_id = useParams()["location_id"];

    const [audioPath, setAudioPath] = useState("");
    const [audioName, setAudioName] = useState("Default Name");
    const [audioDescription, setAudioDescription] = useState("This is a default example description.");
    const [audioImage, setAudioImage] = useState("Ontario-Parks-Title.jpg");
    const [currSeason, setCurrSeason] = useState("Spring");

    console.log("audioID: " + location_id);

    return (
        <>
            <FrenchUserPageMainFrame season={currSeason} location_id={location_id} />

            <div className="mx-5" style={{height: 5 + "rem"}}>

            </div>
            
            <div className="row">
                <div className="col-3"></div>
                <div className="container col-md-auto">
                    <div className="card" style={{width: 24 + "rem"}}>
                        <img className="mx-auto d-block img-fluid" src={audioImage} alt="" style={{width: 400 + "px", height: 400 + "px"}}/>
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

export default FrenchAudioPlayer;
