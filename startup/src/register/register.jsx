import React from 'react';

import {useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
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
                                <div className="card-body" style={{}}>
                                    <h3 className="card-title text-center mb-4">Sign Up</h3>
                                    <form id="registerForm" className="text-start">
                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Username</label>
                                            <input type="text" id="username" name="username" className="form-control"
                                                   placeholder="Username"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" id="password" name="password"
                                                   className="form-control" placeholder="Password"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" id="email" name="email" className="form-control"
                                                   placeholder="Email"/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">Phone Number</label>
                                            <input type="tel" id="phone" name="phone" className="form-control"
                                                   placeholder="Phone Number"/>
                                        </div>
                                        <div className="d-grid">
                                            <button type="button" className="btn btn-primary"
                                                    onClick={() => navigate('/Main')}>Register
                                            </button>
                                        </div>
                                        <p className="text-muted mt-3">Note: This will reach out to the server/database
                                            and register the user. For now, just click register to go to the next
                                            page</p>
                                        <p className="mt-3 text-center">Already have an account? <a style={{color:'blue', cursor: 'pointer'}} onClick={() => navigate('/Login')} >Login here</a>
                                        </p>
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
    return(
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


export default function Register() {
    return (
        <>
            <Body/>
        </>
    )
}