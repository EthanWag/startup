import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../resources/style.css';
import {useNavigate} from "react-router-dom";
import NavBar from '../../resources/NavBar.jsx';
import Footer from '../../resources/Footer.jsx';

function Content(){
    let navigate = useNavigate();
    return (
        <>
            <div className="container mt-5">
                <h1 className="mb-4">Sell a New Item</h1>
                <form id="sellItemForm" className="d-flex">
                    <div className="mb-3 me-3 h-50" style={{flex: "1"}}>
                        <label htmlFor="itemImage" className="form-label">Upload Image:</label>
                        <div className="card p-3" style={{border: "2px dashed #ccc", height: "300px"}}>
                            <input type="file" className="form-control-file" id="itemImage" name="itemImage"
                                   accept="image/*" style={{display: "none"}}/>
                            <label htmlFor="itemImage" className="form-label"
                                   style={{cursor: "pointer", textAlign: "center"}}>Upload Image
                                Here</label>
                        </div>
                    </div>
                    <div style={{flex: "2"}}>
                        <div className="mb-3">
                            <label htmlFor="itemName" className="form-label">Item Name:</label>
                            <input type="text" className="form-control" id="itemName" name="itemName" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="itemDescription" className="form-label">Description:</label>
                            <textarea className="form-control" id="itemDescription" name="itemDescription" rows="3"
                                      required></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="itemPrice" className="form-label">Price:</label>
                            <input type="number" className="form-control" id="itemPrice" name="itemPrice" required/>
                        </div>

                        <br></br>
                        <br></br>
                        <div className="container d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary">Sell Item</button>
                            <a onClick={() => navigate('/Inventory')} className="btn btn-secondary mt-3">Back</a>
                        </div>

                    </div>
                </form>


            </div>
        </>
    )
}


function Body() {
    // put the remaining rest of the page in the return statement below
    return (
        <>
            <NavBar/>
            <Content/>
            <Footer/>
        </>
    )
}


export default function UserItem() {
    return (
        <>
            <React.StrictMode>
                <Body/>
            </React.StrictMode>
        </>
    )
}