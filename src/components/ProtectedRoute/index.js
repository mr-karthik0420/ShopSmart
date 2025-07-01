import React, { useEffect } from 'react';
import { Cookies } from '../../utils/cookies';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const { Component } = props;
    const navigate = useNavigate();
    
    useEffect(() => {
        const token = Cookies.getItem('jwtToken');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    const token = Cookies.getItem('jwtToken');
    return token ? <Component /> : null;
};

export default ProtectedRoute;