import React from "react";
import Product from "../shared/Product"; // Adjusted path to correct folder
import "./productList.css";

const ProductList = () => {
  const products = [
    {
      productName: 'Apple iPhone 14',
      price: 999,
      imageUrl: 'https://example.com/iphone14.jpg',
      description: 'The latest iPhone with a powerful A15 chip and an amazing display.',
    },
    {
      productName: 'Samsung Galaxy S23',
      price: 899,
      imageUrl: 'https://example.com/galaxyS23.jpg',
      description: 'Samsung’s flagship phone with a stunning display and high performance.',
    },
    {
      productName: 'Sony WH-1000XM5',
      price: 349,
      imageUrl: 'https://example.com/sonyheadphones.jpg',
      description: 'Top-rated noise-cancelling headphones with superior sound quality.',
    },
    {
      productName: 'MacBook Pro 16-inch',
      price: 2499,
      imageUrl: 'https://example.com/macbookpro.jpg',
      description: 'Apple’s latest MacBook with the M1 Pro chip for exceptional performance.',
    },
    {
      productName: 'Nike Air Max 270',
      price: 150,
      imageUrl: 'https://example.com/nikeairmax.jpg',
      description: 'Comfortable and stylish running shoes for daily use.',
    },
    // Add more products as needed
  ];

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product
          key={index}
          productName={product.productName}
          price={product.price}
          imageUrl={product.imageUrl}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductList;
