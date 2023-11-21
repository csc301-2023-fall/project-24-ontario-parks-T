import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BACKENDHOST } from "./config";

import EngUserPageMainFrame from "./EngUserMain";


function getSeason() {
    let currentTime = new Date();
    let month = currentTime.getMonth();
    month += 1;

    if (month >= 2 && month <= 4) {
        return "spring";
    }
    else if (month >= 5 && month <= 7) {
        return "summer";
    }
    else if (month >= 8 && month <= 10) {
        return "fall";
    }
    else {
        return "winter";
    }
}


const EngAudioPlay = () => {
    const host = `${BACKENDHOST}AdminControl`

    // get the audio id from scanned
    const location_name = useParams()["location_name"];

    const [audioPath, setAudioPath] = useState("");
    const [audioName, setAudioName] = useState("Default Name");
    const [audioDescription, setAudioDescription] = useState("This is a default example description.");
    const [audioImage, setAudioImage] = useState("Ontario-Parks-Title.jpg");
    const [currSeason, setCurrSeason] = useState("Spring");

    // get the audio data
    fetch(host + "/api/location/" + location_name + "/audio_list/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }
    ).then((response) => {
        if (response.ok) {
            return response.json();
        }
        else {
            console.log("Error: " + response.status);
        }
    }
    ).then((data) => {
        const season = getSeason();

        // get the audio at the current season
        for (let i = 0; i < data.length; i++) {
            if (data[i]["season"] == season) {
                setAudioPath(data[i]["link"]);
                setAudioName(data[i]["name"]);
                setAudioDescription(data[i]["description"]);
                setAudioImage(data[i]["image"]);
                setCurrSeason(season);
                break;
            }
        }
    })

    // return the audio player
    return (
        <>
            <EngUserPageMainFrame season={currSeason} location_name={location_name} />

            <div className="container-fluid">

                <div className="mx-5" style={{height: 5 + "rem"}}>

                </div>

                <div className="row">
                    <div className="col-3 d-sm-none"></div>
                    <div className="container col-md-auto">
                        <div className="card mx-auto" style={{width: 24 + "rem"}}>
                            <img className="mx-auto d-block img-fluid rounded" src={audioImage} alt="Audio Image"/>
                            <div className="card-body">
                                <h5 className="card-title"> {audioName} </h5>
                                <p className="card-text">
                                    {audioDescription}
                                </p>
                                
                                <div className="text-center">
                                    <audio id="dynamicAudio" style={{width: 90 + "%"}} src={audioPath} controls>
                                    Your browser does not support the audio element.
                                    </audio>
                                </div>

                                {/* <div className="text-center">
                                    <audio id="dynamicAudio" style={{width: 90 + "%"}} controls>
                                        <source src={audioPath} type="audio/mpeg"/>
                                    </audio>
                                </div> */}

                            </div>

                        </div>
                    </div>
                    <div className="col-3 d-sm-none"></div>
                </div>
            </div>
        </>
    );
}

export default EngAudioPlay;
