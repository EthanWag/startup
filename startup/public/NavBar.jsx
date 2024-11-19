import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {AuthContext} from "./AuthContext.jsx";

export default function NavBar(){

    let navigate = useNavigate();
    const context = useContext(AuthContext);
    return (
        <>
            <header>
                <div className="d-flex align-items-center justify-content-start">
                    <img src="https://img.icons8.com/ios-filled/24/ffffff/user.png" alt="User Icon"
                         className="me-2 rounded-circle" onClick={() => navigate('/Account')}
                         style={{ cursor: 'pointer' }}/>
                    <span className="text-white">Username</span>
                </div>

                <div className="d-flex align-items-center justify-content-end" style={{ marginTop: '-35px' }}>
                    <img src="https://cdn-icons-png.freepik.com/256/10024/10024225.png?semt=ais_hybrid" alt="Logout Icon"
                            className="icon rounded-circle" onClick={() => logoutUser(navigate,context)}
                            style={{ cursor: 'pointer' }}/>
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

function logoutUser(navigate,context){

    console.log(context.authToken);

    fetch('http://localhost:5050/api/auth/logout', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({token: context.authToken})
    })
        .then((res) => {

            console.log(res)

            if(res.ok){
                context.setAuthToken('');
                context.setIsAuthenticated(false);
                context.setUserName('');

                navigate('/');
            }else{
                switch(res.status){
                    case 401 || 404:
                        navigate('/NotFound');
                        break;
                    case 500:
                        console.log('Internal Server Error');
                        break;
                    default:
                        console.log('Unknown Error');
                        break;
                }
            }
        })
        .catch((error) => console.log(error));
}