import { FC } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { ProductCartContainer, Name, Price } from './product-card.styles';
import { CategoryItem } from '../../store/categories/category.types';
import { formatZAR } from '../../utils/currency';

type ProductCardProps = {
  product: CategoryItem;
  category?: string;
};


const ProductCard: FC<ProductCardProps> = ({ product, category }) => {
  const { name, price, imageUrl, id } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  // display price in South African Rand (ZAR)
  const formatRandomCurrency = (value: number | undefined) => formatZAR(value);

  const header = (
    <div style={{ position: 'relative' }}>
      <img src={imageUrl} alt={name} style={{ width: '100%', maxHeight: 220, height: 'auto', objectFit: 'cover', borderRadius: 6 }} />
  <div className="price-badge">{formatRandomCurrency(price)}</div>
    </div>
  );

  const footer = (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
      <div style={{ fontWeight: 600 }}>{name}</div>
  <div style={{ color: '#333' }}>{formatRandomCurrency(price)}</div>
    </div>
  );

  return (
    <ProductCartContainer>
      <Card header={header} footer={footer}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 6 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button label="Add to cart" icon="pi pi-shopping-cart" onClick={addProductToCart} aria-label={`Add ${name} to cart`} />
            <Link to={`/shop/${encodeURIComponent((category ?? '').toLowerCase())}/${id}`} style={{ alignSelf: 'center', textDecoration: 'none' }}>
              <Button label="View" className="p-button-outlined" />
            </Link>
          </div>
        </div>
      </Card>
    </ProductCartContainer>
  );
};

export default ProductCard;

