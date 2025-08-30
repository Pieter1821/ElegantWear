import { createSelector } from 'reselect';

import { CategoriesState } from './category.reducer';
import { CategoryMap } from './category.types';
import { RootState } from '../store';

const selectCategoryReducer = (state:RootState): CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      // Normalize items: ensure id, name, imageUrl and numeric price exist
      acc[title.toLowerCase()] = (items || []).map((it: any) => ({
        id: it.id ?? it.ID ?? Math.random().toString(36).slice(2, 9),
        name: it.name ?? it.title ?? 'Product',
        imageUrl: it.imageUrl ?? it.image ?? '',
        price: typeof it.price === 'number' ? it.price : Number(it.price) || 0,
        ...it,
      }));
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
