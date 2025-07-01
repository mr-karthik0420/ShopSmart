import React from "react";
import { Link } from "react-router-dom";
import {
  ProductContainer,
  ProductName,
  ProductPrice,
  ProductImage,
  Button,
  ButtonContainer,
} from "./styledComponents";

const AdminProductItem = ({ id, name, description, price, img, handleDeleteProduct }) => {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      handleDeleteProduct(id);
    }
  };

  return (
    <div>
      <ProductContainer>
        <ProductImage src={img} alt={name} />
        <ProductName>{name}</ProductName>
        <ProductPrice>${price}</ProductPrice>
        <ButtonContainer>
          <Link to={`/admin/product-update/${id}`} className='btn btn-primary'>
            Update
          </Link>
          <Button onClick={handleDelete} className='btn btn-danger'>
            Delete
          </Button>
        </ButtonContainer>
      </ProductContainer>
    </div>
  );
};

export default AdminProductItem;