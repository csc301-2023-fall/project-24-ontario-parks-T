import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const FreUserPageMainFrame = (props) => {

    const [season, setSeason] = useState(props.season);
    const fre_seasons = ["printemps", "été", "automne", "hiver"];
    const seasons = ["spring", "summer", "fall", "winter"];

    const location_name = props.location_name;

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a href="#" className="navbar-brand">Gestion AudioQR</a>

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item me-3">
                                <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li> */}

                            <li className="nav-item me-3">
                                <button className='btn'>
                                    <Link to={"/english/play/" + location_name} style={{ textDecoration: 'none', color: 'white' }}>
                                        English
                                    </Link>
                                </button>
                            </li>

                            <li className='nav-item'>
                                <Dropdown>
                                <Dropdown.Toggle variant='secondary' id="dropdown-basic">
                                    Vérifiez les autres saisons
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {/* Display all seasons except the current one */}
                                    {seasons.map((season) => (
                                        season != props.season
                                        ? 
                                        <Dropdown.Item href={"/french/play/" + location_name + "/" + season + "/"}>{fre_seasons[seasons.indexOf(season)]}</Dropdown.Item>
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
                    <p>&copy; 2023 csc301 G24 Tous droits réservés.</p>
                </div>
            </footer>
        </>
    )
}

export default FreUserPageMainFrame;
