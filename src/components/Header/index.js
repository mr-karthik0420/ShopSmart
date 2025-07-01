import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Cookies } from '../../utils/cookies';

const Header = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const token = Cookies.getItem("jwtToken");
    const adminToken = localStorage.getItem("adminJwtToken");

    useEffect(() => {
        if (adminToken) {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, [adminToken]);

    const navigate = useNavigate();

    const onLogout = () => {
        const res = window.confirm("Are you sure you want to log out?");
        if (res) {
            localStorage.clear();
            Cookies.removeItem('jwtToken');
            Cookies.removeItem('userId');
            Cookies.removeItem('userName');
            navigate('/login');
        }
    };

    return (
        <div>
            {isAdmin ?
                <Navbar fixed="top" style={{ padding: '0 20px', minHeight: '10vh', width: '100%', backgroundColor: "#dc3545" }} expand="lg" variant="dark">
                    <Navbar.Brand><Link to='/admin/dashboard' style={{ textDecoration: 'none', color: 'white' }}>G-Mart Admin</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="me-auto">
                            <NavLink to="/admin/dashboard" className="nav-link">Dashboard</NavLink>
                            <NavLink to="/admin/all-products" className="nav-link">Products</NavLink>
                            <NavLink to="/admin/orders" className="nav-link">Orders</NavLink>
                            <NavLink to="/admin/users" className="nav-link">Users</NavLink>
                            <NavLink className="nav-link" to="/login" onClick={onLogout}>
                                Logout
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar> :
                <Navbar fixed="top" style={{ padding: '0 20px', minHeight: '10vh', width: '100%', backgroundColor: "#34D399" }} expand="lg" variant="dark">
                    <Navbar.Brand><Link to='/' style={{ textDecoration: 'none', color: 'white' }}>G-Mart</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="me-auto">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink to="/shopping" className="nav-link">Shop</NavLink>
                            {token && <NavLink to="/my-cart" className="nav-link">Cart</NavLink>}
                            {token && <NavLink to="/my-orders" className="nav-link">Orders</NavLink>}
                            {token && <NavLink to="/my-history" className="nav-link">History</NavLink>}

                            {!token ? (
                                <div style={{ display: "flex" }}>
                                    <NavLink to="/login" className="nav-link">
                                        User Login
                                    </NavLink>
                                    <span className="nav-link">/</span>
                                    <NavLink to="/alogin" className="nav-link">
                                        Admin Login
                                    </NavLink>
                                </div>
                            ) : (
                                <NavLink className="nav-link" to="/login" onClick={onLogout}>
                                    Logout
                                </NavLink>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>}
        </div>
    );
};

export default Header;