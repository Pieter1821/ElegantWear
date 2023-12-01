import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview';
import { useMemo } from 'react';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const memoizedCategoriesMap = useMemo(() => categoriesMap, [categoriesMap]);

  return (
    <Fragment>
      {Object.keys(memoizedCategoriesMap).map((title) => {
        const products = memoizedCategoriesMap[title];
        return <CategoryPreview key={title} title={title} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
