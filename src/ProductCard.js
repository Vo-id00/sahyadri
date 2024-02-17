// ProductCard.js
import React, { useState } from 'react';

function ProductCard() {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-card">
      <img src="https://static.vecteezy.com/system/resources/previews/000/647/097/original/vector-buy-shopping-cart-icon-symbol-illustration-design.jpg" alt="Product" className="product-image" />
      <div className="product-info">
        <h3 className="product-name">Product Name</h3>
        <p className="product-price">Price: $10</p>
        <p className="product-rating">Rating: 4.5</p>
        <div className="quantity">
          <button onClick={decrement} className="quantity-btn">-</button>
          <span className="quantity-value">{quantity}</span>
          <button onClick={increment} className="quantity-btn">+</button>
        </div>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
