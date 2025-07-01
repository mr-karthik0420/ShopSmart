import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <Navbar className='bg-success' variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link to='/admin/dashboard' style={{ color: "white", textDecoration: "none" }}>
            Grocery Web App - Admin
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/admin/dashboard" style={{ padding: "8px", color: "white", textDecoration: "none", fontSize: "18px" }}>
              Dashboard
            </Link>
            <Link to="/admin/users" style={{ padding: "8px", color: "white", textDecoration: "none", fontSize: "18px" }}>
              Users
            </Link>
            <Link to="/admin/all-products" style={{ padding: "8px", color: "white", textDecoration: "none", fontSize: "18px" }}>
              Products
            </Link>
            <Link to="/admin/add-product" style={{ padding: "8px", color: "white", textDecoration: "none", fontSize: "18px" }}>
              Add Product
            </Link>
            <Link to="/admin/orders" style={{ padding: "8px", color: "white", textDecoration: "none", fontSize: "18px" }}>
              Orders
            </Link>
            <Link to="/" style={{ padding: "8px", color: "white", textDecoration: "none", fontSize: "18px" }}>
              Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;