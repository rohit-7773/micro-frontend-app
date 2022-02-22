import React, { useEffect, useState } from 'react';  
import {useNavigate} from 'react-router-dom';


const Login = ({isAuthenticated, authenticate}) => {
    
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/profile');
        }
    }, [isAuthenticated]);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = event => {
        const {name, value} = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = event => {
        event.preventDefault();
        window.localStorage.setItem("userEmail", formData.email);
        console.log(formData);
        authenticate(true);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type = 'email'
                placeholder = 'Email'
                name = 'email'
                value = {FormData.email}
                onChange = {handleChange}
            />
            <input 
                type = 'password'
                placeholder = 'Password'
                name = 'password'
                value = {FormData.password}
                onChange = {handleChange}
            />
            <button>Login</button>
        </form>
    );
}

export default Login;