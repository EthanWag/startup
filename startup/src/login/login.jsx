import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AuthContext} from "../../resources/AuthContext.jsx";
import {useNavigate} from "react-router-dom";

import '../../resources/style.css';

function Content(){

    let navigate = useNavigate();
    const context = useContext(AuthContext);
    return (
        <>
            <main className="d-flex  justify-content-center p-5 align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title text-center mb-4">Sign in</h3>
                                    <form id="loginForm" className="text-start" onSubmit={(e) => {
                                        e.preventDefault();
                                        const formData = new FormData(e.target);
                                        const username = formData.get('username');
                                        const password = formData.get('password');
                                        loginUser(username, password,navigate,context);
                                    }}>
                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Username</label>
                                            <input type="text" id="username" name="username" className="form-control"
                                                   placeholder="Username or email" required/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" id="password" name="password"
                                                   className="form-control" placeholder="Password" required/>
                                        </div>
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary">Login</button>
                                        </div>
                                        <p className="text-muted mt-3"></p>
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


function loginUser(username,password,navigate,context){

    fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({username:username, password:password}),
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify({username:username, password:password})
    })
    .then(res => {

        if(res.ok) {
            document.getElementById('loginForm').querySelector('p').innerText = '';
            res.json().then(data => {
                context.setAuthToken(data.token);
                context.setIsAuthenticated(true);
                context.setUserName(username);

                // sends user to the main page
                navigate('/Main');
            });
        }else{
            switch(res.status){
                case 400:
                    document.getElementById('loginForm').querySelector('p').innerText = 'Error: Missing required fields';
                    break;
                case 401:
                    console.log('Unauthorized');
                    document.getElementById('loginForm').querySelector('p').innerText = 'Incorrect password or username';
                    break;
                default:
                    document.getElementById('loginForm').querySelector('p').innerText = 'Unknown error';
            }
        }})
    .catch(err => {
        console.error('Error:', err);
        document.getElementById('loginForm').querySelector('p').innerText = 'Error: Unknown error';
    });
}