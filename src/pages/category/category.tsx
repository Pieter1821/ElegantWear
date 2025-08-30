import ProductCard from '../../components/product-card/product-card';
import { Spinner } from '../../components/spinner/spinner';
import { useParams } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';

import { CategoryContainer, Title } from './category.styles';
import React from 'react';

type CategoryRouteParams = {
  category: string;
}

const Category = () => {
  const params = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
  const rawCategory = params.category ?? '';
  const decoded = decodeURIComponent(rawCategory).toLowerCase();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(() => categoriesMap[decoded] ?? []);

  useEffect(() => {
    setProducts(categoriesMap[decoded] ?? []);
  }, [decoded, categoriesMap]);

  return (
    <Fragment>
  <Title>{decoded ? decoded.toUpperCase() : 'CATEGORY'}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
