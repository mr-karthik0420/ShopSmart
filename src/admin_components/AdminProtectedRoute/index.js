import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const adminToken = localStorage.getItem('adminJwtToken');
    if (!adminToken) {
      navigate('/alogin');
    }
  }, [navigate]);

  const adminToken = localStorage.getItem('adminJwtToken');
  return adminToken ? <Component /> : null;
};

export default AdminProtectedRoute;