import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../images/Banner/banner1.png'
import banner2 from '../../../images/Banner/banner2.png'
import banner3 from '../../../images/Banner/banner3.png'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-end'>
                        <h3>Medicines cure diseases </h3> <h3> but only doctors can cure patients</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption className='text-start'>
                        <h3>People pay the doctor for his trouble</h3>
                        <h3>for his kindness they still remain in his debt</h3>
                    </Carousel.Caption>

                    <img
                        className="d-block w-100 banner-img"
                        src={banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='text-end'>
                        <h3>Our job is the improving the quality of life</h3>
                        <h3>Not just delaying death</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;