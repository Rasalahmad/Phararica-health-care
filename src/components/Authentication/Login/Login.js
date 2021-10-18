import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {


    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([]);
    const {signInUsingGoogle} = useAuth();
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    return (
        <div className='row mt-5 container'>
            <h2 className = 'my-5'>SIGN IN</h2>
            <div className='col-md-6'>
                <div className="form-floating mb-3">
                    <input onChange = {handleEmail} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input onChange = {handlePassword} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                <button className='btn btn-primary my-5'>Sign in</button>
                <p>New User? <Link to='/signup'>Sign up</Link>
                </p>
                <button onClick = {signInUsingGoogle} className='btn btn-primary me-2'>Sign Up With Google</button>
                <button className='btn btn-secondary'>Sign Up With Github</button>
            </div>
        </div>
    );
};

export default Login;