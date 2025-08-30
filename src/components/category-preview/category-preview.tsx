import { CategoryPreviewContainer, Title, Preview } from './category-preview.styles';
import ProductCard from '../product-card/product-card';
import { FC } from 'react';


import { CategoryItem } from '../../store/categories/category.types';
import React from 'react';


export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;

}

export type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
}

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        {/* Link relative to current /shop route and encode title for safety */}
        <Title to={`${encodeURIComponent(title)}`}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} category={title} />
          ))}

      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
