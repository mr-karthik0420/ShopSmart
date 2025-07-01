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

const History = () => {
  const userId = Cookies.getItem('userId');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Mock history data for demo
    const mockOrders = [
      {
        _id: 'order3',
        firstname: 'John',
        lastname: 'Doe',
        phone: '123-456-7890',
        createdAt: '2024-01-05',
        price: 35.99,
        status: 'Delivered',
        paymentMethod: 'COD'
      },
      {
        _id: 'order4',
        firstname: 'John',
        lastname: 'Doe',
        phone: '123-456-7890',
        createdAt: '2024-01-01',
        price: 12.49,
        status: 'Canceled',
        paymentMethod: 'Credit Card'
      }
    ];
    setOrders(mockOrders);
  }, [userId]);

  return (
    <div>
      <Header />
      <Container>
        <h1 className='text-center'>My History</h1>
        <OrderList>
          {orders.map((order) => {
            const isDelivered = order.status === 'Delivered' || order.status === 'Canceled';

            return isDelivered ? (
              <OrderItem key={order._id} style={{ border: order.status === 'Delivered' ? '1px solid green' : '1px solid red' }}>
                <Strong>Order ID:</Strong> {order._id} <br />
                <Strong>Name:</Strong> {order.firstname} {order.lastname} <br />
                <Strong>Phone:</Strong> {order.phone} <br />
                <Strong>Date:</Strong> {order.createdAt} <br />
                <Strong>Price:</Strong> ${order.price} <br />
                <Strong>Status:</Strong> {order.status} <br />
                <Strong>Payment Method:</Strong> {order.paymentMethod} <br />
              </OrderItem>
            ) : null;
          })}
        </OrderList>
      </Container>
    </div>
  );
};

export default History;