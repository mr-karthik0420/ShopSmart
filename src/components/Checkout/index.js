import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Cookies } from '../../utils/cookies';
import Header from '../Header';

const FormContainer = styled.div`
  text-align: start;
  width: 600px;
  margin: 12vh auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const FormHeader = styled.h2`
  font-size: 1.5rem;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Checkout = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        quantity: '1',
        paymentMethod: 'cod',
        address: '',
    });

    const { id } = useParams();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Mock order creation for demo
        alert('Order created successfully!');
        setFormData({
            firstname: '',
            lastname: '',
            phone: '',
            quantity: '1',
            paymentMethod: 'cod',
            address: '',
        });
    };

    return (
        <div>
            <Header />
            <FormContainer>
                <FormHeader>Order Details</FormHeader>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>First Name:</Label>
                        <Input
                            type="text"
                            name="firstname"
                            placeholder="Enter your first name"
                            value={formData.firstname}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Last Name:</Label>
                        <Input
                            type="text"
                            name="lastname"
                            placeholder="Enter your last name"
                            value={formData.lastname}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Phone:</Label>
                        <Input
                            type="number"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Quantity:</Label>
                        <Input
                            type="text"
                            name="quantity"
                            placeholder="Enter the quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Address:</Label>
                        <textarea
                            rows={5}
                            style={{ width: '100%', border: "1px solid grey", padding: '10px' }}
                            name="address"
                            placeholder="Enter your address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Payment Method:</Label>
                        <Select
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                            required
                        >
                            <option value="cod">Cash on Delivery (COD)</option>
                            <option value="credit">Credit Card</option>
                            <option value="debit">Debit Card</option>
                        </Select>
                    </FormGroup>

                    <Button type="submit">Submit</Button>
                </form>
            </FormContainer>
        </div>
    );
};

export default Checkout;