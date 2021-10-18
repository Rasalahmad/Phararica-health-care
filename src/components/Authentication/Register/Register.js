import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'

const Register = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className='row mt-5 container'>
            <h2 className = 'my-5'>SIGN UP</h2>
            <div className='col-md-6'>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Your Name" />
                    <label for="floatingInput">Your Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                <button className='btn btn-primary my-5'>Create Account</button>
                <p>Already have and account? <Link to='/login'>Sign in</Link>
                </p>
                <button onClick = {signInUsingGoogle} className='btn btn-primary me-2'>Sign Up With Google</button>
                <button className='btn btn-secondary'>Sign Up With Github</button>
            </div>
        </div>
    );
};

export default Register;
