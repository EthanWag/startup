import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";

import '../../public/style.css';
import NavBar from '../../public/NavBar.jsx'
import Footer from '../../public/Footer.jsx'

function Directory(){

    let navigate = useNavigate();

    return (
        <div className="card" style={{height: "300px", width: "100%"}}>
            <div className="container card-body h-100">
                <div className="container d-flex h-100">
                    <div className="row child flex-grow-1 h-100 p-2">
                        <button className="btn btn-primary flex-grow-1 large_button"
                                onClick={() => navigate('/Market')}
                                style={{backgroundImage: "url('https://as2.ftcdn.net/v2/jpg/05/38/41/07/1000_F_538410718_LIvebgTyfVxHVBxVG5PBnHIXJv9LB5h0.jpg')"}}>Marketplace
                        </button>
                    </div>
                    <div className="container child col flex-grow-1 h-100">
                        <div className="col child flex-grow-1 h-50 p-2">
                            <button className="btn btn-secondary flex-grow-1 w-100 h-100 large_button"
                                    onClick={() => navigate('/Inventory')}
                                    style={{backgroundImage: "url('https://st.depositphotos.com/1037178/2993/v/950/depositphotos_29939773-stock-illustration-cartoon-gold-coins-clipart-vector.jpg')"}}>Sell
                                Items
                            </button>
                        </div>
                        <div className="col child flex-grow-1 h-50 p-2">
                            <button className="btn btn-success flex-grow-1 w-100 h-100 large_button"
                                    onClick={() => navigate('/Messages')}
                                    style={{backgroundImage: "url('https://img.freepik.com/premium-vector/phone-messages-communication-colorful-hands-holding-phone-people-write-sms-send-emoticons-remote-internet-messenger-conversation-online-message-friend-vector-cartoon-flat-concept-illustration_176411-2442.jpg')"}}>Messages
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function OtherLinks(){

    let navigate = useNavigate()

    return (
        <>
            <div className="card mt-4" style={{height: "300px", width: "100%"}}>
                <div className="card-body d-flex h-100 justify-content-between">
                    <button className="btn btn-primary" onClick={() => navigate('/Account')}
                            style={{backgroundImage: "url('future item')", width: "30%"}}>Account Info
                    </button>
                    <button className="btn btn-secondary" onClick={() => location.href = 'https://www.amazon.com/'}
                            style={{backgroundImage: "url('future item')", width: "30%"}}>Other Great Deals
                    </button>
                    <button className="btn btn-success" onClick={() => navigate('/About')}
                            style={{backgroundImage: "url('future item')", width: "30%"}}>About
                    </button>
                </div>
            </div>
        </>
    )
}

function Tips(){
    const [tips, setTips] = React.useState(null);

    React.useEffect(() => {
        async function fetchTips() {
            let tipsData = await getTips();
            setTips(tipsData);
        }
        fetchTips();
    }, []);

    if (!tips) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="card" style={{height: "300px", width: "100%"}}>
                <div className="card-body">
                    <h3 className="card-title">Fun Fact</h3>
                    <p>{tips.text}</p>
                </div>
            </div>
        </>
    );
}

function NewsLetter(){
    return (
        <div className="card mt-4" style={{height: "300px", width: "100%"}}>
            <div className="card-body">
                <h3 className="card-title">News Letter</h3>
                <p>This website is still being created and not much is in it yet. In the future, if there are updates
                    about the website and other things that are important for people to know, that information would go
                    here.</p>
            </div>
        </div>
    )
}

function Body() {
    return (
        <>
            <NavBar/>
                <main className="d-flex flex-column flex-grow-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <Directory/>
                                <OtherLinks/>
                            </div>
                            <div className="col-md-6 mb-4">
                                <Tips/>
                                <NewsLetter/>
                            </div>
                        </div>
                    </div>
                </main>
            <Footer/>
        </>
    )
}

export default function Main() {
    return (
        <>
            <React.StrictMode>
                <Body/>
            </React.StrictMode>
        </>
    );
}

async function getTips(){
    try {
        const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=default&amount=1', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        });
        let data = await response.json();
        return data;
    } catch (error) {
            console.error('Error:', error);
    }
}
