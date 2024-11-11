import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/style.css';
import NavBar from '../../public/NavBar';
import Footer from '../../public/Footer';

function Content(){
    return(
        <>
            <div className="container mt-5">
                <h2 className="mb-4">About Us</h2>
                <p>
                    BuyZip is a platform that allows users to buy and sell items. Users can post items they want to
                    sell, and other users can view these items and make purchases. Users can also view items that they
                    have purchased in the past. BuyZip is a great way to buy and sell items online.
                </p>

                {/* Just here for spacing, get rid of this as you want a better layout */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </>
    )
}

function Body() {
    return (
        <>

            <NavBar/>


            <Content/>
            <Footer/>

        </>
    )
}

export default function About() {
    return (
        <React.StrictMode>
            <Body/>
        </React.StrictMode>
    )
}