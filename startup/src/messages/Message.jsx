import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../resources/style.css';
import NavBar from '../../resources/NavBar';


class Notifications extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            list: this.props.items || []
        }
    }
    render() {
        let items = this.state.list;
        return (
            <>
                <div className="container mt-5">
                    <h2 className="mb-4">Messages</h2>
                    {items.map((item, index) => (
                        <div className="card mb-3" key={index}>
                            <div className="card-body">
                                <h5 className="card-title">From:</h5>
                                <p id="messageFrom" className="card-text">{item.name}</p>
                                <h5 className="card-title">Product:</h5>
                                <p id="messageProduct" className="card-text">{item.product}</p>
                                <h5 className="card-title">Price:</h5>
                                <p id="messagePrice" className="card-text">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}

function Body() {
    return (
        <>
            <NavBar/>

            <main>
                <Notifications
                    items={[
                        { name: "John", product: "Shoes", price: "$50.00" },
                        { name: "Jane", product: "Hat", price: "$40.00" },
                        { name: "Joe", product: "Slippers", price: "$10.00" },
                        { name: "Jill", product: "Xbox", price: "$125.00" }
                    ]}
                />
            </main>
        </>
    )
}


export default function Messages() {
    return (
        <React.StrictMode>
            <Body/>
        </React.StrictMode>
    )
}