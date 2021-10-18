import React from 'react';
import './Doctor.css'

const Doctor = ({doctor}) => {
    const {name, expert, img} = doctor
    return (
        <div className = 'col-md-4 col-sm-12'>
            <img className = 'doctors-img' src={img} alt="" />
            <p>{name}</p>
            <p>{expert}</p>
        </div>
    );
};

export default Doctor;