import React from 'react';
import { Link } from 'react-router-dom';
import notFoundPage from '../../../images/404.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img className = 'notFound' src={notFoundPage} alt="" />
            <br />
            <Link to = '/home'>
                <button className = 'btn btn-outline-primary'>Go Home</button>
            </Link>
        </div>
    );
};

export default NotFound;