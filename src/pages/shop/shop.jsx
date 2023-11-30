import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../categories-preview/categories-preview';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import { setCategoriesMap } from '../../store/categories/category.action';

import Category from '../category/category';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const CategoryMap = await getCategoriesAndDocuments();

      dispatch(setCategoriesMap(CategoryMap));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
