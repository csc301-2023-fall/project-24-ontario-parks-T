import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BACKENDHOST } from "./config";
import UserPageMainFrame from "./UserMain";

// Component for playing audio
const AudioPlay = () => {
    // Base URL for backend host
    const host = BACKENDHOST;

    // Retrieving the location ID from the URL parameters
    var location_id = useParams()["location_id"];

    // State hooks for managing audio path, name, image, and current season
    const [audioPath, setAudioPath] = useState("");
    const [audioName, setAudioName] = useState("");
    const [audioImage, setAudioImage] = useState("");
    const [currSeason, setCurrSeason] = useState("Spring");

    // Logging the audio ID for debugging purposes
    console.log("audioID: " + location_id);

    // JSX for rendering the audio play page
    return (
        <>
            {/* Including the main frame for the user page */}
            <UserPageMainFrame season={currSeason} />
            {/* Layout for audio player */}
            <div className="row">
                <div className="col-3"></div>
                <div className="container text-center col-md-auto">
                    {/* Image for the audio (currently without src and alt attributes set) */}
                    <img src="" alt="" />
                    {/* Audio player element */}
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