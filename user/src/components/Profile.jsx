import React, {useEffect} from 'react';  
import { useNavigate } from 'react-router-dom';

const Profile = ({isAuthenticated}) => {

    const userEmail = window.localStorage.userEmail || '';

    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        } 
    }, [isAuthenticated]);

    
    return (
        <h1>{`Profile ${userEmail}`}</h1>

    )
}

export default Profile;