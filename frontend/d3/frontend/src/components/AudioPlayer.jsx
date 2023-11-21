import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BACKENDHOST } from "./config";

import UserPageMainFrame from "./UserMain";


const AudioPlay = () => {
    const host = BACKENDHOST;

    // get the audio id from scanned
    var location_id = useParams()["location_id"];

    const [audioPath, setAudioPath] = useState("");
    const [audioName, setAudioName] = useState("");
    const [audioImage, setAudioImage] = useState("");
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
            <UserPageMainFrame season={currSeason} />
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

export default AudioPlay;
