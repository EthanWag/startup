import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../public/style.css';
import NavBar from '../../public/NavBar.jsx'
import ModCarousel from "../../public/ModCarousel.jsx";
import Footer from '../../public/Footer.jsx';
import {useNavigate} from "react-router-dom";


function Body(){

    let navigate = useNavigate();
    return(
        <>
            <NavBar/>
            <main>
                <div>
                    <ModCarousel myImages={[
                        "https://www.publicdomainpictures.net/pictures/30000/nahled/sports-shoes.jpg",
                        "https://mockupgenerator.ap-south-1.linodeobjects.com/Mockups/Teetori/1dca65b7-293f-4bde-932f-84deae29ac5a-5000-front-light%20blue.jpg",
                        "https://hatstore.imgix.net/7333179222373_1.jpg?auto=compress%2Cformat&w=810&h=648&fit=crop&q=80"
                    ]}
                     isMoveable={true}
                    height={400}
                    width={400}
                    />
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Item Name 1</h5>
                                    <p className="card-text">Price: $10.00</p>
                                    <button className="btn btn-primary" onClick={() => navigate('/Item')}>Edit
                                        Item
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title">Description</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <a onClick={() => navigate('/Item')} className="btn btn-primary">Add New Item</a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default function Inventory() {

    return (
        <React.StrictMode>
            <Body />
        </React.StrictMode>
    )

}