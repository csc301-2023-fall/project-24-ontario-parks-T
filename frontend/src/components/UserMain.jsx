import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const UserPageMainFrame = (props) => {

    const [season, setSeason] = useState(props.season);
    const seasons = ["Spring", "Summer", "Fall", "Winter"];

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a href="#" className="navbar-brand">AudioQR Management</a>

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-3">
                                <Link className="nav-link active" aria-current="page" href="#">Home</Link>
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
                                        <Dropdown.Item href="#">{season}</Dropdown.Item>
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

            <footer className="text-center py-1 bg-dark text-white">
                <div className="container">
                    <p>&copy; 2023 csc301 G24 All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default UserPageMainFrame;
