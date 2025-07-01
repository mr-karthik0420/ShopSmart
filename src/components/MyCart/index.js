import React, { useState, useEffect } from "react";
import { Cookies } from '../../utils/cookies';
import Header from "../Header";
import { Link } from "react-router-dom";
import {
  ProductContainer,
  ProductName,
  ProductPrice,
  ProductImage,
} from "../ProductItem/styledComponents";

const MyCart = () => {
  const userId = Cookies.getItem("userId");
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    // Mock cart data for demo
    const mockCartData = [
      {
        _id: '1',
        productname: 'Fresh Apples',
        price: 3.99,
        image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        _id: '2',
        productname: 'Organic Bananas',
        price: 2.49,
        image: 'https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ];
    setCartData(mockCartData);
  }, []);

  const handleCancelClick = (productId) => {
    setCartData((prevCartData) =>
      prevCartData.filter((item) => item._id !== productId)
    );
    alert('Item removed from cart');
  };

  return (
    <div>
      <Header />
      <div style={{ paddingTop: '12vh' }}>
        <h1 className="text-center mb-4">My Cart</h1>

        <div className="container mx-auto px-4 my-4">
          <div className="row">
            {cartData.map((product) => (
              <div key={product._id} className="col-md-4 mb-4">
                <ProductContainer>
                  <ProductImage src={product.image} alt={product.productname} />
                  <div className="p-4">
                    <ProductName className="text-xl font-semibold mb-2">{product.productname}</ProductName>
                    <ProductPrice className="text-gray-700">${product.price}</ProductPrice>
                    <div className="mt-4 d-flex justify-content-between">
                      <button
                        onClick={() => handleCancelClick(product._id)}
                        className="btn btn-danger"
                      >
                        Remove from Cart
                      </button>
                      <Link
                        to={`/order-details/${product._id}`}
                        className="btn btn-primary"
                      >
                        Buy this
                      </Link>
                    </div>
                  </div>
                </ProductContainer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;