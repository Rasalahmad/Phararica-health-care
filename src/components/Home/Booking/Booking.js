import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const [details, setDetails] = useState([])
    const {foodId} = useParams();
    console.log(foodId);
    useEffect( () => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setDetails(data));
    }, [])

    useEffect( () => {
        const selected = details.find(dt => dt.id === foodId)
        console.log(selected);
    }, [details])

    return (
        <div>
            <h4>This is booking</h4>
        </div>
    );
};

export default Booking;