import React from 'react';
import * as PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../public/style.css';
import NavBar from '../../public/NavBar.jsx';
import Footer from '../../public/Footer.jsx';
import {useNavigate} from "react-router-dom";

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: this.props.items || []
        }
    }

    propTypes = {
        items: PropTypes.array.isRequired
    }

    render() {

        let items = this.state.list;
        return (
            <div className="row mt-4" style={{maxHeight: "600px", overflowY: "auto"}}>
                {items.map((item,index) => (
                    <div className="card col-md-3 mb-3" key={index}>
                        <img src={item.imgSrc} className="card-img-top" alt="Item 1 Image"/>
                        <div className="card-body">
                            <h5 className="card-title">{item.value}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

function Body() {

    let navigate = useNavigate()

    return (
        <>
            <NavBar/>

            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-3">
                        <div className="list-group">
                            <a onClick={() => navigate('/Cart')} style={{ cursor: 'pointer' }} className="list-group-item list-group-item-action">Cart</a>
                            <a onClick={() => navigate('/Account')} style={{ cursor: 'pointer' }} className="list-group-item list-group-item-action">Account</a>
                            <a href="#" className="list-group-item list-group-item-action">Wishlist</a>
                            <a onClick={() => navigate('/Account')} style={{ cursor: 'pointer' }} className="list-group-item list-group-item-action">Settings</a>
                        </div>
                        <div className="mt-4">
                            <h5>Categories</h5>
                            <ul className="list-group">
                                <li className="list-group-item"><a href="#">Clothes</a></li>
                                <li className="list-group-item"><a href="#">Shoes</a></li>
                                <li className="list-group-item"><a href="#">Accessories</a></li>
                                <li className="list-group-item"><a href="#">Electronics</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="justify-content-center">
                            <input type="search" id="search1" className="form-control" placeholder="Search" aria-label="Search"/>
                        </div>
                        <List items={[
                            { imgSrc: "https://via.placeholder.com/300", altText: "Item for Sale", description: "Shoes for", price: "$50.00" },
                            { imgSrc: "https://via.placeholder.com/300", altText: "Item for Sale", description: "Red Hat for", price: "$40.00" },
                            { imgSrc: "https://via.placeholder.com/300", altText: "Item for Sale", description: "Slippers for", price: "$10.00" },
                            { imgSrc: "https://via.placeholder.com/300", altText: "Item for Sale", description: "Xbox for", price: "$125.00"},
                            { imgSrc: "https://via.placeholder.com/300", altText: "Item for Sale", description: "Laptop for", price: "$500.00"},
                            { imgSrc: "https://via.placeholder.com/300", altText: "Item for Sale", description: "Headphones for", price: "$75.00"},
                            { imgSrc: "https://via.placeholder.com/300", altText: "Item for Sale", description: "Smartphone for", price: "$300.00"},
                            { imgSrc: "https://via.placeholder.com/300", altText: "Item for Sale", description: "Tablet for", price: "$200.00"},
                            { imgSrc: "https://via.placeholder.com/300", altText: "Item for Sale", description: "Camera for", price: "$150.00"},
                            { imgSrc: "https://via.placeholder.com/300", altText: "Item for Sale", description: "Watch for", price: "$100.00"}
                        ]}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default function Market() {
    return (
    <React.StrictMode>
        <Body/>
    </React.StrictMode>
    );
}