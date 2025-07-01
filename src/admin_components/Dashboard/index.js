import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style.css';
import { Link } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar';

const Dashboard = () => {
  const [data, setData] = useState({
    products: 6,
    users: 15,
    orders: 8,
  });

  return (
    <div>
      <AdminNavbar />
      <h1 className="text-center mt-5 pt-5">Admin Dashboard</h1>
      <div className="dashboard container">
        <div className="card-container">
          <Card>
            <Card.Body>
              <Card.Title>Product Count</Card.Title>
              <Card.Text>{data.products} Products</Card.Text>
              <Link style={{ textDecoration: 'none', color: 'white' }} to={'/admin/all-products'}>
                <Button variant="primary">View Products</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>User Count</Card.Title>
              <Card.Text>{data.users} Users</Card.Text>
              <Link style={{ textDecoration: 'none', color: 'white' }} to={'/admin/users'}>
                <Button variant="primary">View Users</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Order Count</Card.Title>
              <Card.Text>{data.orders} Orders</Card.Text>
              <Link style={{ textDecoration: 'none', color: 'white' }} to="/admin/orders">
                <Button variant="primary">View Orders</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Add Product</Card.Title>
              <Link style={{ textDecoration: 'none', color: 'white' }} to='/admin/add-product'>
                <Button style={{ width: '100px' }} variant="success">Add</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;