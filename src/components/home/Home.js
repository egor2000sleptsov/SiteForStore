import React, {Component} from 'react';
import Carousel from "./Carousel/Carousel";
import TestF from "./TestF";
class Home extends Component {

    render() {
        return (
            <div>
                <Carousel/>
                <TestF/>
            </div>
        );
    }
}

export default Home;