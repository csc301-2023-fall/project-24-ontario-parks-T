import React from 'react';
import { NavLink } from 'react-router-dom';
import { FRONTENDHOST } from "./config";

// Component for the main frame of the admin page
const AdminPageMainFrame = () => {
    return (
        <div className="d-flex flex-column flex-grow-1">
            {/* Navigation bar setup */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    {/* Brand logo or name */}
                    <NavLink to="#" className="navbar-brand">AudioQR Management Admin</NavLink>

                    {/* Navbar content */}
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {/* Navigation item for adding a location */}
                            <li className="nav-item me-3">
                                <NavLink activeclassname="navbar__link--active" 
                                className="nav-link" aria-current="page" 
                                to={`${FRONTENDHOST}admin/locations/create/`}>Add Location</NavLink>
                            </li>

                            {/* Navigation item for adding an audio */}
                            <li className="nav-item me-3">
                                <NavLink activeclassname="navbar__link--active" 
                                className="nav-link" aria-current="page" 
                                to={`${FRONTENDHOST}admin/audios/create/`}>Add Audio</NavLink>
                            </li>

                            {/* Navigation item for audio list */}
                            <li className="nav-item me-3">
                                <NavLink end activeclassname="navbar__link--active" 
                                className="nav-link" aria-current="page" 
                                to={`${FRONTENDHOST}admin/audios`}>Audio List</NavLink>
                            </li>

                            {/* Navigation item for location list */}
                            <li className="nav-item me-3">
                                <NavLink end activeclassname="navbar__link--active" 
                                className="nav-link" aria-current="page" 
                                to={`${FRONTENDHOST}admin/locations`}>Location List</NavLink>
                            </li>

                            {/* Navigation item for user registration */}
                            <li className="nav-item me-3">
                                <NavLink activeclassname="navbar__link--active" 
                                className="nav-link" aria-current="page" 
                                to={`${FRONTENDHOST}admin/register`}>Register</NavLink>
                            </li>

                            {/* Navigation item for logout */}
                            <li className="nav-item me-3">
                                <NavLink activeclassname="navbar__link--active" 
                                className="nav-link" aria-current="page" 
                                to={`${FRONTENDHOST}admin/logout`}>Logout</NavLink>
                            </li>                          
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Footer section */}
            <footer className="text-center py-1 bg-dark text-white">
                <div className="container">
                    {/* Footer content */}
                    <p>&copy; 2023 csc301 G24 All rights reserved.</p>
                </div>
            </footer>

        </div>
    )
}

export default AdminPageMainFrame;
