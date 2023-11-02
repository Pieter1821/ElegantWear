import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.js';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const getCategoriesMap = async () => {
      const CategoryMap = await getCategoriesAndDocuments();
      console.log(CategoryMap);
    }
    getCategoriesMap();
  } , [])

  
  const value = { products };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
