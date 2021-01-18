import React from 'react';
import {Carousel as Car} from "react-bootstrap";
import CSS_Classes from "./Carousel.module.css";
import img1 from '../../../files/imgs/1.jpg'
import img2 from '../../../files/imgs/2.jpg'
import img3 from '../../../files/imgs/3.jpg'

const Carousel = (props) => {
    return (
        <Car nextLabel='Следующий' className={CSS_Classes.carousel}>
            <Car.Item>
                <img
                    src={img1}
                    className={`d-block w-100 ` +CSS_Classes.img} alt='First slide'
                />
                {/*<Car.Caption>
                    <h3>
                        First slide label
                    </h3>
                    <p>
                        something
                    </p>
                </Car.Caption>*/}
            </Car.Item><Car.Item>
            <img
                src={img2}
                className='d-block w-100'  alt='Second slide' />
            {/*<Car.Caption>
                <h3>
                    Second slide label
                </h3>
                <p>
                    something
                </p>
            </Car.Caption>*/}
        </Car.Item><Car.Item>
            <img
                src={img3}
                className='d-block w-100' alt='Third slide' />
            {/*<Car.Caption>
                <h3>
                    Third slide label
                </h3>
                <p>
                    something
                </p>
            </Car.Caption>*/}
        </Car.Item>
        </Car>
    );
};

export default Carousel;
