import React, { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="shop-container">
      {products.map(({ id, name, imageUrl, price }) => (
        <div key={id}>
          <h1>{name}</h1>
          <p>${price}</p>
          <img src={imageUrl} alt={name}></img>
        </div>
      ))}
    </div>
  );
};

export default Shop;
