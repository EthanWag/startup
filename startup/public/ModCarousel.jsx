
import React from 'react';
import * as PropTypes from "prop-types";

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

// Class just for a carousel because I think it is a bit more complex

export default function ModCarousel({ myImages, extra, isMoveable, height , width }) {

    // [extraDetail, setExtraDetail] = React.useState(extra);

    function canMove() {
        if(isMoveable){
            return null
        }else{
            return 10000
        }
    }
    function canControl() {
        if(isMoveable){
            return true
        }else{
            return false
        }
    }
    return (
        <>
            <Carousel className = "custom-carousel" interval={canMove()} indicators={canControl()} controls={canControl()}>

                {myImages.map((image, index) => (

                    <Carousel.Item key={index}>
                        <div className="d-flex justify-content-center align-items-center" style={{height: '100%'}}>
                            <img
                                src={image}
                                className="d-block"
                                alt={`Slide ${index + 1}`}
                                style={{
                                    maxHeight: height,
                                    maxWidth: width,
                                    objectFit: 'contain',
                                    margin: '0 auto'
                                }}
                            />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>

    );
}

ModCarousel.propTypes = {
    myImages: PropTypes.array.isRequired,
    extra: PropTypes.any,
    isMoveable: PropTypes.bool.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
};