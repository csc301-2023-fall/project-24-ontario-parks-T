import React, { useState } from "react";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react'

const avail_info = (location_name, location_id) => {
    var avaliData = new FormData();
    var notification = document.getElementById("notification");

    notification.innerHTML = "";

    // This is the required file, it can changed to modify the rquired block
    if(location_name == " " ){
        notification.innerHTML = "This field is required ! Thanks You!";
        return;
    }

    

avaliData.append("Location Name" , location_name)

var request = fetch('http://localhost:8000/AdminControl/api/location/&{location_id}/avail/add', 
    { 
        method: 'POST',
        body: avaliData,
        headers:{
            // need to finish the admit login for reducing the red line 
            'Authorizatio': `Bearer ${localStorage.getItem('token')}`,
        }

    }).then(response => response.json()).catch(error => { console.log(error)})

    notification.innerHTML = " & check; location updated successfully";
    notification.style.color = "green";
}

const Addail = () => {
    const [location, setLocation] = useState({
        // there is a set to hold the property, modify if it is needed
        "location id": "",
        "location name": "",
        "location address": "",
        "location city":"",
        "location province":"",
        "location post code" : "",
        "longitude" : "",
        "latitude": "",



    });

    const navigate  = navigate();
    // need to fix the navigate functionallity. It will be fixed latter.

    const location_id = useParams()['locationID'];

    useEffect(()=>{
        fetch('http://localhost:8000/location/detail/${location_id}/').then((res) => res.json())
        .then(data => {
            setLocation(data.result[0]);
        });
    }, [location_id]);

    return <>
    <div className="box has-text-centered">

<div className="hero is-small">
    <div className="hero-body">

    </div>
</div>
    <div className="columns">
    <div className="column is-2 "></div>
        <h1 className="is-size-5-mobile is-size-3-desktop title"> Adding available time for property {location.locaion_name} </h1>

        <div className="column is-2 "></div>
    </div>

<div className="hero is-small">
    <div className="hero-body">

    </div>
</div>

<div className="hero is-small">
    <div className="hero-body">

    </div>
</div>


<div className="columns">
    <div className="column is-2 "></div>
    <div className="column">
        <span>
            <input className="button is-link" type="register" value="Go back" id="locationCreate" onClick={() => navigate(-1)} readOnly/>
        </span>

    </div>

    <div className="column">
        <span>
            <input className="button is-link" type="register" value="Add availability" id="locationCreate" onClick={() => avail_info(
                location_id)} readOnly/>
        </span>

    </div>
    <div className="column is-2 "></div>
</div>


    
<div className="columns">
        <div className="column"></div>
        <div className="column block has-text-centered">
            <h1 className="is-block mb-2" style={{fontSize: "25px"}} id="notification"> </h1>
        </div>
        <div className="column"></div>
    </div>
</div>
</>

}

export default Addail;
