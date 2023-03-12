import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase.utils";

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const categoryMap = await getCategoriesAndDocuments("categories");
    console.log(categoryMap);
  }, []);

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
