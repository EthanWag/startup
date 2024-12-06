import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../resources/style.css';
import NavBar from '../../resources/NavBar.jsx'
import Footer from '../../resources/Footer.jsx'



class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list : this.props.items || []
        }
    }

    render() {
        let items = this.state.list;
        return (
            <>
                {items.map((item,index) => (
                    <div className="card mb-3" key={index}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={item.imgSrc}
                                    className="img-fluid rounded-start" alt="Item Image"
                                    style={{ maxWidth: "200px", height: "auto" }}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <p className="card-text"><small className="text-muted">Price: {item.price}</small></p>
                                    <button className="btn btn-danger">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )

    }
}

function Content() {
    return (
        <>
            <NavBar/>

            <main>
                <div className="container mt-5">
                    <h1 className="mb-4">Your Cart</h1>
                    <div className="cart-items">
                        <CartItem items={[
                            { imgSrc: "https://via.placeholder.com/200", title: "Item 1", description: "Description 1", price: "$XX.XX" },
                            { imgSrc: "https://via.placeholder.com/200", title: "Item 3", description: "Description 3", price: "$XX.XX" },
                            { imgSrc: "https://via.placeholder.com/200", title: "Item 4", description: "Description 4", price: "$XX.XX" }
                        ]}/>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <h4>Total: $XX.XX</h4>
                        <button className="btn btn-success">Checkout</button>
                    </div>
                </div>
            </main>

            <br></br>
            <br></br>

            <Footer/>
        </>
    )
}

export default function Cart() {
    return (
        <div>
            <Content/>
        </div>
    )
}

