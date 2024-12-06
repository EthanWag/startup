import React from 'react';
import * as PropTypes from "prop-types";
import ModCarousel from "../../resources/ModCarousel.jsx";
import {useNavigate} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import '../../resources/style.css';

function EnterRouter() {
    let navigate = useNavigate(); // This is a hook
    return (
        <>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" style={{ cursor: 'pointer' }} onClick={() => navigate('/login')}>Login</a>
                </li>
                <li className="nav-item">
                        <a className="nav-link" style={{ cursor: 'pointer' }} onClick={() => navigate('/market')}>Shop</a>
                </li>
                <li className="nav-item">
                        <a className="nav-link" style={{ cursor: 'pointer' }} onClick={() => navigate('/about')}>About</a>
                </li>
            </ul>
        </>
    )
}

function Login(){

    let navigate = useNavigate();

    return (
        <>
            <div id="login" className="carousel-caption d-none d-md-block text-start">
                <h5>Sign in Today</h5>
                <p>Get the best deals by signing in</p>
                <a onClick={() => navigate('/Login')} className="btn btn-primary">Login</a>
            </div>

        </>
    )
}

class Sales extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.items || []
        }
    }

    render() {
        let items = this.state.list;
        return (
            <>
            <div className="row">
                    {items.map((item, index) => (
                        <div className="col-md-6" key={index}>
                            <div className="card mb-3">
                                <img src={item.imgSrc} className="card-img-top" alt={item.altText}/>
                                <div className="card-body">
                                    <p className="card-text">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

Sales.propTypes = {
    items: PropTypes.array.isRequired
}

class Deals extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.items || []
        }
    }

    render() {
        let items = this.state.list;
        return(
          <>
              <div className="row">
                  {items.map((item, index) => (
                      <div className="col-md-4" key={index} style={{alignItems: "flex-start", justifyContent: "flex-start"}}>
                          <div className="deal-box rounded border border-dark p-3 mb-3 text-center"
                               style={{height: "300px"}}>
                              <img src={item.imgSrc} className="img-fluid mb-2" alt="Deal 1"/>
                              <h5>{item.header}</h5>
                              <p>{item.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </>
        );
    }
}
Deals.propTypes = {
    items: PropTypes.array.isRequired
}

function Content() {
    let navigate = useNavigate();
    return (
        <>
            <main className="container" style={{paddingTop: "40px", maxWidth: "100%", alignContent: "flex-start"}}>
                <div className="d-flex justify-content-between">
                    <div className="row left-div col-md-5 offset-md-1">
                        <h1 style={{fontWeight: "bold", marginBottom: 0, paddingBottom: 0}}>Great Deals for today</h1>
                    <div className="row mt-0">

                        <Deals items={[
                            { imgSrc: "https://via.placeholder.com/150", header: "Deal 1", description: "Buy one get one free on item A" },
                            { imgSrc: "https://via.placeholder.com/150", header: "Deal 2", description: "Buy one get one free on item B" },
                            { imgSrc: "https://via.placeholder.com/150", header: "Deal 3", description: "30% off on item C" }
                        ]}/>

                        <div className="row mb-5">
                            <div className="col-md-6 text-center">
                                <h5>Looking to sell?</h5>
                                <button className="btn btn-primary mt-2" onClick={() => navigate('/Login')}>Sell here</button>
                            </div>
                            <div className="col-md-1 d-flex align-items-center">
                                <div className="vr"></div>
                            </div>
                            <div className="col-md-5 text-center">
                                <h5>Looking to register?</h5>
                                <button className="btn btn-primary mt-2" onClick={() => navigate('/Register')}>Register here</button>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="right-div">
                        <div className="col-md-8 offset-md-2">
                            <div className="new-items-box rounded border border-dark p-3 mb-3 text-center">
                                <h5 style={{ fontWeight: "bold" }}>New Items Currently for Sale</h5>
                                <Sales items={[
                                    { imgSrc: "https://via.placeholder.com/300", altText: "Item for Sale", description: "Shoes for $50.00" },
                                    { imgSrc: "https://via.placeholder.com/300", altText: "Item for Sale", description: "Red Hat for $40.00" },
                                    { imgSrc: "https://via.placeholder.com/300", altText: "Item for Sale", description: "Slippers for $10.00" },
                                    { imgSrc: "https://via.placeholder.com/300", altText: "Item for Sale", description: "Xbox for $125.00" }
                                ]}/>
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
            <header className="header">Great Deals Below</header>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-3" href="#">BuyZip</a>
                    <input className="form-control me-2 mx-auto" type="search" placeholder="Search"
                           aria-label="Search"/>
                    <button className="btn btn-outline-success mx-auto" type="submit">
                        <img src="https://img.icons8.com/ios-filled/24/000000/search.png" alt="Search"/>
                    </button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <EnterRouter/>
                    </div>
                </div>
            </nav>

            <div>
                <ModCarousel
                    myImages={[
                        "https://herdfreedhartz.com/wp-content/uploads/2024/04/Consumer-1100x400-1.jpg",
                        "https://discovergroningen.com/wp-content/uploads/2019/02/Folkingestraat-2-1100x400.jpg",
                        "https://www.centerforhoardingandcluttering.com/wp-content/uploads/2017/10/Hoarding-Support-Group-in-Cave-City-TN-1100x400.jpg",
                    ]}
                    extra={<Login/>}
                    isMoveable={false}
                    height={400}
                    width={1100}
                />
            </div>

            <div>
                <Content/>
            </div>
            <footer>
                <p>Hit up on instagram! @buyzip</p>
                <p>Author: <a href="https://github.com/EthanWag/startup">Github</a></p>
            </footer>

        </>
    )
}

export default function Enter() {
    return (
        <>
            <React.StrictMode>
                <Body/>
            </React.StrictMode>
        </>
    );
}
