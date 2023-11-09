import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import FrenchUserPageMainFrame from "./FrenchUserMain";


const FrenchAudioPlay = () => {
    const host = "http://localhost:8000"

    // get the audio id from scanned
    var location_id = useParams()["location_id"];

    const [audioPath, setAudioPath] = useState("");
    const [audioName, setAudioName] = useState("");
    const [audioImage, setAudioImage] = useState("");
    const [currSeason, setCurrSeason] = useState("Spring");

    console.log("audioID: " + location_id);

    return (
        <>
            <FrenchUserPageMainFrame season={currSeason} />
            <div className="row">
                <div className="col-3"></div>
                <div className="container text-center col-md-auto">
                    <img src="" alt="" />
                    <audio id="dynamicAudio" controls>
                        <source src={audioPath} type="audio/mpeg"/>
                    </audio>
                </div>
                <div className="col-3"></div>
            </div>
        </>
    );
}

export default FrenchAudioPlay;
