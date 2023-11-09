import React from 'react';
import { Link } from 'react-router-dom';

const AdminPageMainFrame = () => {
    console.log("AdminPageMainFrame");
    return (
        <div className="d-flex flex-column flex-grow-1">
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link href="#" className="navbar-brand">AudioQR Management Admin</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" 
                    id="navbarResponsive">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-3">
                                <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link className="nav-link" aria-current="page" href="#">Add Location</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link className="nav-link" aria-current="page" href="#">Add Audio</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link className="nav-link" aria-current="page" href="#">Edit Location</Link>
                            </li>
                             <li className="nav-item me-3">
                                <Link className="nav-link" aria-current="page" href="#">Location List</Link>
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
