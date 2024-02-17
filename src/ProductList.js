// ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

function ProductList() {
  return (
    <div className="product-list">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default ProductList;