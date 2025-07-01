import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import AdminNavbar from '../AdminNavbar';

const Container = styled.div`
  max-width: 700px;
  margin: 5vh auto;
  text-align: start;
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  min-height: 100px;
`;

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    productname: '',
    description: '',
    price: '',
    image: '',
    category: '',
    countInStock: '',
    rating: '',
  });

  useEffect(() => {
    // Mock product data for demo
    const mockProduct = {
      productname: 'Fresh Apples',
      description: 'Crispy red apples',
      price: '3.99',
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'fruits',
      countInStock: '50',
      rating: '4.5',
    };
    setFormData(mockProduct);
  }, [id]);

  const { productname, description, price, image, category, countInStock, rating } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mock update for demo
    alert('Product updated successfully!');
    navigate('/admin/all-products');
  };

  return (
    <div>
      <AdminNavbar />
      <div style={{ paddingTop: '12vh' }}>
        <h1 className='text-center'>Update Product</h1>
        <Container>
          <Form onSubmit={handleSubmit} className='shadow p-3'>
            <FormGroup>
              <Label htmlFor="productname">Product Name</Label>
              <Input
                type="text"
                name="productname"
                value={productname}
                onChange={handleChange}
                placeholder="Enter product name"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="rating">Rating</Label>
              <Input
                type="number"
                name="rating"
                value={rating}
                onChange={handleChange}
                placeholder="Enter product rating"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="price">Price</Label>
              <Input
                type="number"
                name="price"
                value={price}
                onChange={handleChange}
                placeholder="Enter product price"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="image">Image URL</Label>
              <Input
                type="text"
                name="image"
                value={image}
                onChange={handleChange}
                placeholder="Enter image URL"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="category">Category</Label>
              <Input
                type="text"
                name="category"
                value={category}
                onChange={handleChange}
                placeholder="Enter category"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="countInStock">Count in Stock</Label>
              <Input
                type="number"
                name="countInStock"
                value={countInStock}
                onChange={handleChange}
                placeholder="Enter count in stock"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="description">Description</Label>
              <Textarea
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Enter product description"
              />
            </FormGroup>
            <Button type="submit">Update Product</Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default UpdateProduct;