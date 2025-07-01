import React, { useEffect, useState } from 'react';
import { Cookies } from '../../utils/cookies';
import styled from 'styled-components';
import Header from '../Header';

const Container = styled.div`
  padding: 20px;
  margin-top: 10vh;
  text-align: start;
`;

const OrderList = styled.ul`
  list-style: none;
  padding: 0;
`;

const OrderItem = styled.li`
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
`;

const Strong = styled.strong`
  font-weight: bold;
`;

const MyOrders = () => {
  const userId = Cookies.getItem('userId');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Mock orders data for demo
    const mockOrders = [
      {
        _id: 'order1',
        firstname: 'John',
        lastname: 'Doe',
        phone: '123-456-7890',
        createdAt: '2024-01-15',
        price: 25.99,
        status: 'Pending',
        paymentMethod: 'COD'
      },
      {
        _id: 'order2',
        firstname: 'John',
        lastname: 'Doe',
        phone: '123-456-7890',
        createdAt: '2024-01-10',
        price: 15.49,
        status: 'Shipped',
        paymentMethod: 'Credit Card'
      }
    ];
    setOrders(mockOrders);
  }, [userId]);

  return (
    <div>
      <Header />
      <Container>
        <h1 className='text-center'>My Orders</h1>
        <OrderList>
          {orders.map((order) =>
            order.status !== 'Delivered' ? (
              <OrderItem key={order._id}>
                <Strong>Order ID:</Strong> {order._id} <br />
                <Strong>Name:</Strong> {order.firstname} {order.lastname} <br />
                <Strong>Phone:</Strong> {order.phone} <br />
                <Strong>Date:</Strong> {order.createdAt} <br />
                <Strong>Price:</Strong> ${order.price} <br />
                <Strong>Status:</Strong> {order.status} <br />
                <Strong>Payment Method:</Strong> {order.paymentMethod} <br />
              </OrderItem>
            ) : null
          )}
        </OrderList>
      </Container>
    </div>
  );
};

export default MyOrders;