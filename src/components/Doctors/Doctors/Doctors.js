import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect( () => {
        fetch('/doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data));
    }, [])
    console.log(doctors)
    return (
        <div>
            <h2 className = 'my-5'>Our Team</h2>
            <div className = 'row'>
                {
                    doctors.map(doctor => <Doctor
                    key = {doctor.id}
                    doctor = {doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;

