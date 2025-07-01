import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const adminToken = localStorage.getItem('adminJwtToken'); // Match with your login storage key
    console.log('Admin Token Check:', adminToken); // Debug log
    if (!adminToken) {
      navigate('/alogin'); // Redirect to admin login
    }
  }, []); // Run only on mount

  // Render Component only if authenticated, otherwise null (redirect handled by useEffect)
  const adminToken = localStorage.getItem('adminJwtToken');
  return adminToken ? <Component /> : null;
};

export default AdminProtectedRoute;