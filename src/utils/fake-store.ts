export type FakeProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

import { Category } from '../store/categories/category.types';

/**
 * Fetch products from Fake Store API and convert into the project's Category[] shape.
 */
export async function fetchFakeStoreCategories(): Promise<Category[]> {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('Failed to fetch Fake Store API');
  const products: FakeProduct[] = await res.json();

  const map = products.reduce<Record<string, FakeProduct[]>>((acc, p) => {
    const key = p.category.toLowerCase();
    if (!acc[key]) acc[key] = [];
    acc[key].push(p);
    return acc;
  }, {});

  const categories: Category[] = Object.keys(map).map((key) => {
    const items = map[key].map((p) => ({
      id: p.id,
      imageUrl: p.image,
      name: p.title,
      price: p.price,
    }));

    return {
      title: key,
      imageUrl: items[0]?.imageUrl ?? '',
      items,
      route: key,
    } as Category;
  });

  return categories;
}
