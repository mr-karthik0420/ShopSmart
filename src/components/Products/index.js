import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductItem from '../ProductItem';
import Header from '../Header';

const ProductsContainer = styled.div`
  margin-top: 10vh;
  padding: 20px;
  text-align: start;
`;

const Heading = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  margin-top: 40px;
  text-align: center;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  max-width: 270px;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const CategoryFilter = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Mock products data
const mockProducts = [
  {
    _id: '1',
    productname: 'Fresh Apples',
    description: 'Crispy red apples',
    price: 3.99,
    image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'fruits'
  },
  {
    _id: '2',
    productname: 'Organic Bananas',
    description: 'Sweet organic bananas',
    price: 2.49,
    image: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'fruits'
  },
  {
    _id: '3',
    productname: 'Fresh Carrots',
    description: 'Crunchy orange carrots',
    price: 1.99,
    image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'vegetables'
  },
  {
    _id: '4',
    productname: 'Whole Milk',
    description: 'Fresh whole milk',
    price: 4.29,
    image: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'dairy'
  },
  {
    _id: '5',
    productname: 'Potato Chips',
    description: 'Crispy potato chips',
    price: 2.99,
    image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'snacks'
  },
  {
    _id: '6',
    productname: 'Mixed Nuts',
    description: 'Premium mixed nuts',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'dryfruits'
  }
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Use mock data for demo
    setProducts(mockProducts);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const productNameMatchesSearch =
      product.productname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      searchQuery.trim() === '';

    if (selectedCategory === 'all') {
      return productNameMatchesSearch;
    } else {
      return (
        productNameMatchesSearch && product.category.toLowerCase() === selectedCategory
      );
    }
  });

  const categories = [
    ...new Set(products.map((product) => product.category.toLowerCase())),
  ];
  categories.unshift('all');

  return (
    <div>
      <Header />
      <ProductsContainer>
        <FiltersContainer style={{ gap: '20px' }}>
          <div className='w-100'>
            <h3>Search By Product Name</h3>
            <SearchBar
              type="text"
              placeholder="Search by product name"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          <div className='w-100'>
            <h3>Filter By Category</h3>
            <CategoryFilter onChange={handleCategoryChange} value={selectedCategory}>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </CategoryFilter>
          </div>
        </FiltersContainer>

        <Heading>Products</Heading>
        <StyledList>
          {filteredProducts.map((product) => (
            <ListItem key={product._id}>
              <ProductItem
                id={product._id}
                img={product.image}
                name={product.productname}
                description={product.description}
                price={product.price}
              />
            </ListItem>
          ))}
        </StyledList>
      </ProductsContainer>
    </div>
  );
};

export default Products;