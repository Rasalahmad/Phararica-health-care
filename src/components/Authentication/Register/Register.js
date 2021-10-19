import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'

const Register = () => {
    const {signInUsingGoogle, handleRegister} = useAuth();

    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [name, setName] = useState([]);

    // const history = useHistory

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    const handleUserRegister = () => {
        handleRegister(email, password, name);
        
    }


    return (
        <div className='row mt-5 container'>
            <h2 className = 'my-5'>SIGN UP</h2>
            <div className='col-md-6'>
                <div className="form-floating mb-3">
                    <input onChange = {handleName} type="text" className="form-control" id="floatingInput" placeholder="Your Name" />
                    <label for="floatingInput">Your Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange = {handleEmail} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input onChange = {handlePassword} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                <button onClick = {handleUserRegister} type = 'submit' className='btn btn-primary my-5'>Create Account</button>
                <p>Already have and account? <Link to='/login'>Sign in</Link>
                </p>
                <button onClick = {signInUsingGoogle} className='btn btn-primary me-2'>Sign Up With Google</button>
                <button className='btn btn-secondary'>Sign Up With Github</button>
            </div>
        </div>
    );
};

export default Register;
