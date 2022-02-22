import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = ({authenticate}) => {

    const navigate = useNavigate();
    useEffect(() => {
        authenticate(false);
        navigate('/');
        window.localStorage.removeItem('userEmail')
    })

    return (
        <>
        <h1>Logging out</h1>
        </>
    )
}

export default Logout