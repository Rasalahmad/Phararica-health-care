import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, img, description, price} = service;
    return (
        <div className = 'col-lg-6 col-md-6 col-sm-6 single-service'>
            <div className = 'row'>
                <div className = 'col'>
                    <img className = 'service-img' src={img} alt="" />
                </div>
                <div className = 'col'>
                    <h2>{name}</h2>
                    <p>{description.slice(0, 100)}</p>
                    <small>Price: {price}</small>
                </div>
            </div>
        </div>
    );
};

export default Service;