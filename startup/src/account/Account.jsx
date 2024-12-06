import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../resources/style.css';
import NavBar from '../../resources/NavBar';
import Footer from '../../resources/Footer';

function Content(){
    return(
        <>
            <div className="container mt-5 text-start">
                <h2 className="mb-4 text-center">Current Account Information</h2>
                <div className="mb-3">
                    <label className="form-label">Username:</label>
                    <p id="currentUsername" className="form-control-plaintext">current_username</p>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <p id="currentEmail" className="form-control-plaintext">current_email@example.com</p>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <p id="currentPassword" className="form-control-plaintext">********</p>
                </div>
            </div>
            <div className="container mt-5">
                <div className="container mt-5 text-start">
                    <h1 className="mb-4 text-center">Account Settings</h1>
                    <form id="accountSettingsForm">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username:</label>
                            <input type="text" className="form-control" id="username" name="username" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" name="email" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input type="password" className="form-control" id="password" name="password" required/>
                        </div>
                        <button type="submit" className="btn btn-primary text-center">Save Changes</button>
                    </form>
                </div>
            </div>
            <br></br>
            <br></br>
        </>
    )
}

function Body(){

    return(
        <>
            <NavBar/>
            <Content/>
            <Footer/>
        </>
    )

}

export default function Account() {
    return (
        <React.StrictMode>
            <Body/>
        </React.StrictMode>
    )
}