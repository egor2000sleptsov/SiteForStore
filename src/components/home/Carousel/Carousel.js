import React from 'react';
import {Carousel as Car} from "react-bootstrap";
import CSS_Classes from "./Carousel.module.css";

const Carousel = (props) => {
    return (
        <Car nextLabel='Следующий' className={CSS_Classes.carousel}>
            <Car.Item>
                <img
                    src="https://i1.photo.2gis.com/images/branch/25/3518437244437223_a8c8.jpg"
                    className='d-block w-100' alt='First slide' />
                <Car.Caption>
                    <h3>
                        First slide label
                    </h3>
                    <p>
                        something
                    </p>
                </Car.Caption>
            </Car.Item><Car.Item>
            <img
                src='https://i1.photo.2gis.com/images/branch/25/3518437244436147_130c.jpg'
                className='d-block w-100'  alt='Second slide' />
            <Car.Caption>
                <h3>
                    Second slide label
                </h3>
                <p>
                    something
                </p>
            </Car.Caption>
        </Car.Item><Car.Item>
            <img
                src='https://avatars.mds.yandex.net/get-altay/3522550/2a0000017684c0cf315ae5ca5282afdc02a5/XXXL'
                className='d-block w-100' alt='Third slide' />
            <Car.Caption>
                <h3>
                    Third slide label
                </h3>
                <p>
                    something
                </p>
            </Car.Caption>
        </Car.Item>
        </Car>
    );
};

export default Carousel;
