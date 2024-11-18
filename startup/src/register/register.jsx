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
                                    <form id="registerForm" className="text-start" onSubmit={(e) => {
                                        e.preventDefault();
                                        const formData = new FormData(e.target);
                                        const username = formData.get('username');
                                        const password = formData.get('password');
                                        const email = formData.get('email');
                                        const phone = formData.get('phone');
                                        registerUser(username, password, email, phone);
                                    }}>
                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Username</label>
                                            <input type="text" id="username" name="username" className="form-control"
                                                   placeholder="Username" required/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <input type="password" id="password" name="password"
                                                   className="form-control" placeholder="Password" required/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" id="email" name="email" className="form-control"
                                                   placeholder="Email" required/>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">Phone Number</label>
                                            <input type="tel" id="phone" name="phone" className="form-control"
                                                   placeholder="Phone Number" required/>
                                        </div>
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary">Register</button>
                                        </div>
                                        <p className="text-muted mt-3" style={{ color: 'red' }}></p>
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

// in the future, this will be much more advanced, but for now, prints a message for only 2 error types
function registerUser(username,password,email,phone){

    fetch('http://localhost:5050/api/auth/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username:username, password:password, email:email, phone:phone})
    }).then(res => {

        if(res.ok) {
            document.getElementById('registerForm').querySelector('p').innerText = '';
            res.json().then(data => {
                const token = data.token;
                console.log('success!');
                // implement logic here that will save token in a state and local storage for future use
            });
        }else{
            switch(res.status){
                case 400:
                    document.getElementById('registerForm').querySelector('p').innerText = 'Error: Missing required fields';
                    break;
                case 409:
                    console.log('existing user');
                    document.getElementById('registerForm').querySelector('p').innerText = 'Error: Username already taken';
                    break;
                default:
                    document.getElementById('registerForm').querySelector('p').innerText = 'Unknown error';
            }
        }
    })
    .catch(err => {
        document.getElementById('registerForm').querySelector('p').innerText = 'Error: Unknown error';
    });
}