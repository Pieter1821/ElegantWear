import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../categories-preview/categories-preview';
import { fetchCategoriesStart } from '../../store/categories/category.action';

import Category from '../category/category';
import React from 'react';
const ProductDetail = lazy(() => import('../product-detail/product-detail'));

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
        <Route path=":category/:productId" element={<ProductDetail />} />
      </Routes>
    </Suspense>
  );
};

export default Shop;
