import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase.utils";

export const ProductsContext = createContext({
  categoriesMap: {},
});

export const ProductProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(async () => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      setCategoriesMap(categoryMap);

      getCategoriesMap();
    };
  }, []);

  const value = { categoriesMap };

  return (
    <categoriesContext.Provider value={value}>
      {children}
    </categoriesContext.Provider>
  );
};
