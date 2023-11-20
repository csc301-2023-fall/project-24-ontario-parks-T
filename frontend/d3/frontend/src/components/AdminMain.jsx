import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminPageMainFrame = () => {
    return (
        <div className="d-flex flex-column flex-grow-1">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink to="#" className="navbar-brand">AudioQR Management Admin</NavLink>

                    <div className="collapse navbar-collapse"
                        id="navbarResponsive">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-3">
                                <NavLink activeclassname="navbar__link--active" 
                                className="nav-link" aria-current="page" 
                                to="/admin/locations/create/">Add Location</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink activeclassname="navbar__link--active" 
                                className="nav-link" aria-current="page" 
                                to="/admin/audios/create/">Add Audio</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink
                                    end activeclassname="navbar__link--active" 
                                    className="nav-link" aria-current="page" 
                                    to="/admin/audios">Audio List</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink end activeclassname="navbar__link--active" 
                                className="nav-link" aria-current="page" 
                                to="/admin/locations">Location List</NavLink>
                            </li>
                            <li className="nav-item me-3">
                                <NavLink activeclassname="navbar__link--active" 
                                className="nav-link" aria-current="page" 
                                to="/admin/logout">Logout</NavLink>
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

        </div>

    )
}

export default AdminPageMainFrame;
