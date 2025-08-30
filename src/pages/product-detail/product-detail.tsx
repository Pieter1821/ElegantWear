import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import { formatZAR } from '../../utils/currency';

const ProductContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 24, padding: 24, alignItems: 'start' }}>{children}</div>
);

const Image: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img {...props} style={{ width: '100%', maxWidth: 360, height: 360, objectFit: 'cover', borderRadius: 8 }} />
);

const Info: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>{children}</div>
);

const Title: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <h1 style={{ margin: 0, fontSize: 28 }}>{children}</h1>
);

const Price: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div style={{ fontSize: 20, fontWeight: 600 }}>{children}</div>
);

const Actions: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', marginTop: 12, gap: 12, flexWrap: 'wrap' }}>{children}</div>
);

const ProductDetail = () => {
  const { category, productId } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const dispatch = useDispatch();

  const decoded = (category ?? '').toLowerCase();
  const products = categoriesMap[decoded] ?? [];
  const product = products.find((p:any) => String(p.id) === String(productId));

  if (!product) return <div style={{ padding: 24 }}>Product not found</div>;

  const handleAdd = () => dispatch(addItemToCart([], product));

  const handleBuyNow = () => {
    // buy now should take the user to checkout with this product as the only item.
    // For now, add item to cart and redirect to /checkout (router redirect left to app-level)
    dispatch(addItemToCart([], product));
    window.location.href = '/checkout';
  };

  return (
    <ProductContainer>
      <Image src={product.imageUrl} alt={product.name} />
      <Info>
        <Title>{product.name}</Title>
  <Price>{formatZAR(product.price)}</Price>
        <p style={{ color: '#666' }}>More product details would go here — description, specifications, reviews.</p>
        <Actions>
          <button onClick={handleAdd} style={{ padding: '10px 18px', borderRadius: 6, background: '#0073e6', color: '#fff', border: 'none' }}>Add to cart</button>
          <button onClick={handleBuyNow} style={{ padding: '10px 18px', borderRadius: 6, border: '1px solid #ddd', background: '#fff' }}>Buy now</button>
        </Actions>
      </Info>
    </ProductContainer>
  );
};

export default ProductDetail;
