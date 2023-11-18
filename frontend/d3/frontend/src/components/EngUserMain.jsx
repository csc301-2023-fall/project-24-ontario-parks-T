import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const EngUserPageMainFrame = (props) => {

    const [season, setSeason] = useState(props.season);
    const seasons = ["spring", "summer", "fall", "winter"];

    const location_name = props.location_name;

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <div className='navbar-brand'>
                        <button className='btn'>
                            <Link to={"/french/play/" + location_name} style={{ textDecoration: 'none', color: 'white' }}>
                                Français
                            </Link>
                        </button>
                    </div>

                    <div className="navbar">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item me-3">
                                <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li> */}

                            <li className="nav-item me-3">
                            </li>

                            <li className='nav-item'>
                                <Dropdown>
                                <Dropdown.Toggle variant='secondary' id="dropdown-basic">
                                    Check other seasons
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {/* Display all seasons except the current one */}
                                    {seasons.map((season) => (
                                        season != props.season
                                        ? 
                                        <Dropdown.Item href={"/english/play/" + location_name + "/" + season + "/"}>{season}</Dropdown.Item>
                                        :
                                        null
                                    ))}
                                </Dropdown.Menu>
                                </Dropdown>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <footer className="text-center bg-dark text-white">
                <div className="container">
                    <p>&copy; 2023 csc301 G24 All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default EngUserPageMainFrame;
