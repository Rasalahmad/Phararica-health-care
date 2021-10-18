import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css'

const Doctor = ({ doctor }) => {
    const { name, expert, img, day1, day2, day3, time1, time2, time3 } = doctor
    return (
        <div className='col-md-4 col-sm-12 doctors-container'>
            <img className='doctors-img' src={img} alt="" />
            <div className='doctor-details'>
                <h4>{name}</h4>
                <p>{expert}</p>
            </div>
            <div className = 'doctors-time'>
                <div>
                    <p>{day1}</p>
                    <p>{day2}</p>
                    <p>{day3}</p>
                    
                </div>
                <div>
                    <p>{time1}</p>
                    <p>{time2}</p>
                    <p>{time3}</p>
                </div>
            </div>
            <Link>
                <button className = 'btn btn-outline-primary'>Give your Serial</button>
            </Link>
        </div>
    );
};

export default Doctor;