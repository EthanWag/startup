import {useNavigate} from "react-router-dom";
import React from "react";

export default function NavBar(){

    let navigate = useNavigate();

    return (
        <>
            <header>
                <div className="d-flex align-items-center justify-content-start">
                    <img src="https://img.icons8.com/ios-filled/24/ffffff/user.png" alt="User Icon"
                         className="me-2 rounded-circle" onClick={() => navigate('/Account')}
                         style={{ cursor: 'pointer' }}/>
                    <span className="text-white">Username</span>
                </div>
            </header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-3" href="#">BuyZip</a>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link" style={{ cursor: 'pointer' }}
                                       onClick={() => navigate('/Main')}>Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{cursor: 'pointer'}}
                                       onClick={() => navigate('/Market')}>Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{cursor: 'pointer'}}
                                       onClick={() => navigate('/Inventory')}>Items</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{cursor: 'pointer'}}
                                       onClick={() => navigate('/Cart')}>Cart</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
    );

}