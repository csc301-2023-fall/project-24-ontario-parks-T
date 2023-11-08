import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

import UserPageMainFrame from "./UserMain";


const AudioPlay = () => {
    // get the audio id from scanned
    var audio_id = useParams()["audio_id"];

    console.log("audioID: " + audio_id);

    // set the audio source
    const audioPath = "http://localhost:8000/api/audio/" + audio_id + "/";

    // return the audio player
    return (
        <>
            <UserPageMainFrame />
            <div className="row">
                <div className="col-3"></div>
                <div className="col-3"></div>
                <div className="col-3"></div>
            </div>
            <div className="row">
                <div className="col-3"></div>
                <div className="container text-center col-md-auto">
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
