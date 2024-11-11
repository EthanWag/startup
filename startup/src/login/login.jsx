import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";

import '../../public/style.css';

function Content(){

    let navigate = useNavigate();
    return (
        <>
            <main className="d-flex  justify-content-center p-5 align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title text-center mb-4">Sign in</h3>
                                    <form id="loginForm" className="text-start">
                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Username</label>
                                            <input type="text" id="username" name="username" className="form-control"
                                                   placeholder="Username or email"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" id="password" name="password"
                                                   className="form-control" placeholder="Password"/>
                                        </div>
                                        <div className="d-grid">
                                            <button type="button" className="btn btn-primary"
                                                    onClick={() => navigate('/Main')}>Login
                                            </button> {/* So your going to want to have a conditional here so that they can log in but for now nothing*/}
                                        </div>
                                        <p className="text-muted mt-3">Note: This will reach out to the server/database
                                            and make sure the user is registered. For now, just click login to go to the
                                            next page</p>
                                        <p className="mt-3 text-center">New User? <a style={{color: 'blue', cursor: 'pointer'}} onClick={() => navigate('/Register')}>Register here</a></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

function Body(){
    return (
        <>
            <header className="header" style={{color: 'white', textAlign: 'left'}}>BuyZip</header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white"></nav>
            <Content/>
            <footer>
                <p>Hit up on instagram! @buyzip</p>
                <p>Author: <a href="https://github.com/EthanWag/startup">Github</a></p>
            </footer>
        </>
    )
}

export default function Login() {
    return (
        <React.StrictMode>
            <Body/>
        </React.StrictMode>
    )
}