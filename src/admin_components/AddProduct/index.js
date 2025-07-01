import React, { useState } from 'react';
import styled from 'styled-components';
import AdminNavbar from '../AdminNavbar';

const Container = styled.div`
  max-width: 800px;
  margin: 5vh auto;
  padding: 20px;
  text-align: start;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
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
  min-height: 100px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: teal;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #006666;
  }
`;

const InputRowsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productname: '',
    description: '',
    price: '',
    image: '',
    category: '',
    countInStock: '',
    rating: '',
  });

  const { productname, description, price, image, category, countInStock, rating } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productname || !description || !price || !image || !category || !countInStock || !rating) {
      return alert('Please fill in all required fields');
    }

    // Mock product addition for demo
    alert('Product added successfully!');
    
    setFormData({
      productname: '',
      description: '',
      price: '',
      image: '',
      category: '',
      countInStock: '',
      rating: '',
    });
  };

  return (
    <div>
      <AdminNavbar />
      <div style={{ paddingTop: '12vh' }}>
        <h1 className="text-center">Add Product</h1>
        <Container>
          <Form onSubmit={handleSubmit} className='shadow p-3'>
            <InputRowsContainer>
              <FormGroup className='w-100'>
                <Label htmlFor="productname">Product Name</Label>
                <Input
                  type="text"
                  name="productname"
                  value={productname}
                  onChange={handleChange}
                  placeholder="Enter product name"
                />
              </FormGroup>
              <FormGroup className='w-100'>
                <Label htmlFor="rating">Rating</Label>
                <Input
                  type="number"
                  name="rating"
                  value={rating}
                  onChange={handleChange}
                  placeholder="Enter product rating"
                  min="1"
                  max="5"
                />
              </FormGroup>
              <FormGroup className='w-100'>
                <Label htmlFor="price">Price</Label>
                <Input
                  type="number"
                  name="price"
                  value={price}
                  onChange={handleChange}
                  placeholder="Enter product price"
                  step="0.01"
                />
              </FormGroup>
            </InputRowsContainer>
            
            <InputRowsContainer>
              <FormGroup className='w-100'>
                <Label htmlFor="image">Image URL</Label>
                <Input
                  type="text"
                  name="image"
                  value={image}
                  onChange={handleChange}
                  placeholder="Enter image URL"
                />
              </FormGroup>
              <FormGroup className='w-100'>
                <Label htmlFor="category">Category</Label>
                <Select
                  name="category"
                  id="category"
                  value={category}
                  onChange={handleChange}
                >
                  <option value="">Select Category</option>
                  <option value="fruits">Fruits</option>
                  <option value="vegetables">Vegetables</option>
                  <option value="dairy">Dairy</option>
                  <option value="snacks">Snacks</option>
                  <option value="dryfruits">Dry Fruits</option>
                  <option value="beverages">Beverages</option>
                  <option value="meat">Meat and Seafood</option>
                </Select>
              </FormGroup>
              <FormGroup className='w-100'>
                <Label htmlFor="countInStock">Count in Stock</Label>
                <Input
                  type="number"
                  name="countInStock"
                  value={countInStock}
                  onChange={handleChange}
                  placeholder="Enter count in stock"
                />
              </FormGroup>
            </InputRowsContainer>
            
            <FormGroup className='w-100'>
              <Label htmlFor="description">Description</Label>
              <Textarea
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Enter product description"
              />
            </FormGroup>
            <Button type="submit">Add Product</Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default AddProduct;