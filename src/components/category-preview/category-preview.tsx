import { CategoryPreviewContainer, Title, Preview } from './category-preview.styles';
import ProductCard from '../product-card/product-card';
import { FC } from 'react';


export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;

}

export type CategoryPreviewProps = {
  title: string;
  products: Product[];


}

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={`/${title}`}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
