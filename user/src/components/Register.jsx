import React, { useEffect, useState } from 'react';  
import {useNavigate} from 'react-router-dom';

const Register = ({isAuthenticated, authenticate}) => {

    const navigate = useNavigate();
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/profile');
        }
    }, [isAuthenticated]);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
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
        <form onSubmit = {handleSubmit}>
            <input 
                type = 'text'
                placeholder = 'First Name'
                name = 'firstName'
                value = {formData.firstName}
                onChange = {handleChange}
            />
            <input 
                type = 'text'
                placeholder = 'Last Name'
                name = 'lastName'
                value = {formData.lastName}
                onChange = {handleChange}
            />
            <input 
                type = 'text'
                placeholder = 'Email'
                name = 'email'
                value = {formData.email}
                onChange = {handleChange}
            />
            <input 
                type = 'password'
                placeholder = 'Password'
                name = 'password'
                value = {formData.password}
                onChange = {handleChange}
            />
            <button>Register</button>
        </form>
    )
}

export default Register;