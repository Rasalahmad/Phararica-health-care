import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
    const {bookId} = useParams();
    const [services, setServices] = useState([]);
    const [singleService, setSingleService] = useState([]);
    useEffect( () => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    useEffect( () => {
        const found = services.find(service => service.id === bookId)
        setSingleService(found);
    }, [services])
    return (
        <div className = 'booking-container'>
            <img src={singleService?.img} alt="" />
            <h1>{singleService?.name}</h1>
            <p>{singleService?.description}</p>
            <p>Fees: {singleService?.price} tk only</p>
            <button className = 'btn btn-outline-primary'>Book Now</button>
        </div>
    );
};

export default Booking;