import React from "react";
import { Link } from "react-router-dom";
import { Cookies } from '../../utils/cookies';
import {
  ProductContainer,
  ProductName,
  ProductPrice,
  ProductImage,
  Button,
  ButtonContainer,
} from "./styledComponents";

const ProductItem = ({ id, name, description, price, img }) => {
  const handleAddToCart = async () => {
    const userId = Cookies.getItem("userId");
    
    if (!userId) {
      alert('Please login to add items to cart');
      return;
    }

    // Mock add to cart for demo
    alert('Product added to cart!');
  };

  return (
    <ProductContainer>
      <ProductImage src={img} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductPrice>${price}</ProductPrice>
      <ButtonContainer>
        <Link to={`/order-details/${id}`} className="btn btn-primary" style={{ borderRadius: '0', textDecoration: 'none' }}>
          Buy Now
        </Link>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </ButtonContainer>
    </ProductContainer>
  );
};

export default ProductItem;