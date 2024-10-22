import PropTypes from "prop-types"
import React from "react";
import "./Product.css"; // Adjust the path if necessary

const Product = ({ productName, price, imageUrl, description }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={productName} className="product-image" />
      <h3>{productName}</h3>
      <p>{description}</p>
      <p className="product-price">${price}</p>
      {/* You can add more details or a button here if needed */}
    </div>
  );
};

Product.propTypes = {
  description: PropTypes.any,
  imageUrl: PropTypes.any,
  price: PropTypes.any,
  productName: PropTypes.any
}

export default Product;
