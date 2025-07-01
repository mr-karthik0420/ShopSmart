import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 10vh auto;
  padding: 20px;
  text-align: start;
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: rgb(62, 62, 62);
  margin-bottom: 20px;
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
  padding: 10px 20px;
  background-color: rgb(98, 90, 252);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const CategoryItem = styled.li`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
`;

const AddCategory = () => {
  const [formData, setFormData] = useState({ category: '', description: '' });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:5100/api/categories');
      console.log('Categories Response:', response.data);
      setCategories(response.data.data || []);
    } catch (error) {
      console.error('Error fetching categories:', error.response?.data || error.message);
      setError('Failed to load categories. Check server or network.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.category) return alert('Category is required');
    try {
      const response = await axios.post('http://localhost:5100/add-category', formData);
      console.log('Add Category Response:', response.data);
      setFormData({ category: '', description: '' });
      fetchCategories(); // Refresh the list after adding
    } catch (error) {
      console.error('Error adding category:', error.response?.data || error.message);
      setError('Failed to add category. Try again.');
    }
  };

  return (
    <Container>
      <Heading>Add Category</Heading>
      <Form onSubmit={handleSubmit} className='shadow p-3'>
        <FormGroup>
          <Label htmlFor="category">Category</Label>
          <Input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter category"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
          />
        </FormGroup>
        <Button type="submit">Add Category</Button>
      </Form>
      <Heading>Category List</Heading>
      <CategoryList>
        {loading ? (
          <CategoryItem>Loading...</CategoryItem>
        ) : error ? (
          <CategoryItem style={{ color: 'red' }}>{error}</CategoryItem>
        ) : categories.length > 0 ? (
          categories.map((cat) => (
            <CategoryItem key={cat._id || Math.random()}>
              <strong>{cat.category}</strong> - {cat.description}
            </CategoryItem>
          ))
        ) : (
          <CategoryItem>No categories available</CategoryItem>
        )}
      </CategoryList>
    </Container>
  );
};

export default AddCategory;