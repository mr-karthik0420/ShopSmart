import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AdminNavbar from '../AdminNavbar';

const Container = styled.div`
  text-align: start;
  padding-top: 12vh;
`;

const OrderCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
`;

const OrderDetail = styled.p`
  margin: 5px 0;
`;

const Button = styled.button`
  background-color: rgb(98, 90, 252);
  color: #fff;
  width: 150px;
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(68, 60, 196);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Orders = () => {
  const [data, setData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState('');
  const [statusForm, setStatusForm] = useState({
    status: 'Confirmed',
  });

  useEffect(() => {
    // Mock orders data for demo
    const mockOrders = [
      {
        _id: 'order1',
        firstname: 'John',
        lastname: 'Doe',
        phone: '123-456-7890',
        productId: 'prod1',
        quantity: 2,
        price: 25.99,
        paymentMethod: 'COD',
        address: '123 Main St, City',
        createdAt: '2024-01-15',
        status: 'Pending'
      },
      {
        _id: 'order2',
        firstname: 'Jane',
        lastname: 'Smith',
        phone: '987-654-3210',
        productId: 'prod2',
        quantity: 1,
        price: 15.49,
        paymentMethod: 'Credit Card',
        address: '456 Oak Ave, Town',
        createdAt: '2024-01-14',
        status: 'Confirmed'
      }
    ];
    setData(mockOrders);
  }, []);

  const onSubmit = (formData) => {
    setData(prevData => 
      prevData.map(order => 
        order._id === selectedOrderId 
          ? { ...order, status: formData.status }
          : order
      )
    );
    setIsUpdate(false);
    alert('Order status updated successfully');
  };

  const onChangeStatus = (orderId) => {
    setIsUpdate(true);
    setSelectedOrderId(orderId);
  };

  return (
    <div>
      <AdminNavbar />
      <Container className="container">
        <h1 className='text-center'>Orders Management</h1>
        {data.length === 0 ? (
          <div>
            <p>No orders in your shop!</p>
          </div>
        ) : (
          <div>
            {isUpdate ? (
              <div className="mb-4">
                <form onSubmit={(e) => { e.preventDefault(); onSubmit(statusForm); }}>
                  <div className="form-group">
                    <label htmlFor="statusSelect">Select Status</label>
                    <select 
                      className="form-control" 
                      id="statusSelect" 
                      value={statusForm.status} 
                      onChange={(e) => setStatusForm({ ...statusForm, status: e.target.value })}
                    >
                      <option value="Confirmed">Confirmed</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                  <Button type="submit">Save Changes</Button>
                  <Button type="button" onClick={() => setIsUpdate(false)} style={{ marginLeft: '10px', backgroundColor: '#6c757d' }}>
                    Cancel
                  </Button>
                </form>
              </div>
            ) : null}
            {!isUpdate && data.map((item) => (
              <OrderCard key={item._id}>
                <OrderDetail><strong>Order ID:</strong> {item._id}</OrderDetail>
                <OrderDetail><strong>Customer:</strong> {item.firstname} {item.lastname}</OrderDetail>
                <OrderDetail><strong>Phone:</strong> {item.phone}</OrderDetail>
                <OrderDetail><strong>Product ID:</strong> {item.productId}</OrderDetail>
                <OrderDetail><strong>Quantity:</strong> {item.quantity}</OrderDetail>
                <OrderDetail><strong>Total Price:</strong> ${item.price}</OrderDetail>
                <OrderDetail><strong>Payment Method:</strong> {item.paymentMethod}</OrderDetail>
                <OrderDetail><strong>Address:</strong> {item.address}</OrderDetail>
                <OrderDetail><strong>Created At:</strong> {item.createdAt}</OrderDetail>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <OrderDetail><strong>Status:</strong> {item.status}</OrderDetail>
                  {item.status !== 'Canceled' && item.status !== 'Delivered' && (
                    <Button onClick={() => onChangeStatus(item._id)}>
                      Update Status
                    </Button>
                  )}
                  {item.status === 'Canceled' && (
                    <Button disabled>Customer Canceled</Button>
                  )}
                  {item.status === 'Delivered' && (
                    <Button disabled>Delivered</Button>
                  )}
                </div>
              </OrderCard>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Orders;