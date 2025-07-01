import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Cookies } from '../utils/cookies';
import Header from '../components/Header';

const commonFields = [
    { controlId: 'email', label: 'Email', type: 'email' },
    { controlId: 'password', label: 'Password', type: 'password' },
];

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const token = Cookies.getItem('jwtToken');
    const adminToken = localStorage.getItem('adminJwtToken');

    useEffect(() => {
        if (token) {
            navigate('/');
        } else if (adminToken) {
            navigate('/admin/dashboard');
        }
    }, [navigate, token, adminToken]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Mock admin login for demo
        if (formData.email === 'admin@gmail.com' && formData.password === 'admin123') {
            localStorage.setItem('adminJwtToken', 'mock-admin-token');
            Cookies.setItem('userName', 'Admin User');
            navigate('/admin/dashboard');
            alert('Admin login successful!');
        } else {
            alert("Invalid credentials. Use: admin@gmail.com / admin123");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div>
            <Header />
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', paddingTop: '10vh' }}>
                <Card className="shadow p-4" style={{ width: '400px' }}>
                    <Card.Body>
                        <h2 className="mb-4">Admin Login</h2>
                        <div className="mb-3 p-3 bg-light rounded">
                            <small>
                                <strong>Demo Credentials:</strong><br />
                                Email: admin@gmail.com<br />
                                Password: admin123
                            </small>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            {commonFields.map((field) => (
                                <Form.Group style={{ textAlign: 'start', marginBottom: '10px' }} controlId={field.controlId} key={field.controlId}>
                                    <Form.Label>{field.label}</Form.Label>
                                    <Form.Control
                                        type={field.type}
                                        placeholder={`Enter ${field.label.toLowerCase()}`}
                                        name={field.controlId}
                                        value={formData[field.controlId]}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>
                            ))}
                            <Button type="submit" className="btn-primary w-100 mt-3">Login</Button>
                        </Form>
                        <p className="mt-3">
                            Don't have an account? <Link to="/asignup">Sign Up</Link>
                        </p>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default AdminLogin;