import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductItem from '../ProductItem';
import AdminNavbar from '../AdminNavbar';

const ProductsContainer = styled.div`
  margin-top: 4vh;
  padding: 20px;
  text-align: start;
`;

const StyledList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 20px;
  padding: 0;
`;

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mock products data for demo
    const mockProducts = [
      {
        _id: '1',
        productname: 'Fresh Apples',
        description: 'Crispy red apples',
        price: 3.99,
        image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        _id: '2',
        productname: 'Organic Bananas',
        description: 'Sweet organic bananas',
        price: 2.49,
        image: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        _id: '3',
        productname: 'Fresh Carrots',
        description: 'Crunchy orange carrots',
        price: 1.99,
        image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ];
    setProducts(mockProducts);
  }, []);

  const handleDeleteProduct = async (id) => {
    setProducts(products.filter(product => product._id !== id));
    alert('Product deleted successfully');
  };

  return (
    <div>
      <AdminNavbar />
      <div style={{ paddingTop: '12vh' }}>
        <h1 className='text-center'>Products Management</h1>
        <ProductsContainer>
          <StyledList>
            {products.map(product => (
              <ProductItem
                key={product._id}
                id={product._id}
                img={product.image}
                name={product.productname}
                description={product.description}
                price={product.price}
                handleDeleteProduct={handleDeleteProduct}
              />
            ))}
          </StyledList>
        </ProductsContainer>
      </div>
    </div>
  );
};

export default AdminProducts;