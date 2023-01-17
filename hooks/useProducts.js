import { useMemo } from 'react';

export const useProducts = (products, category) => {
  const productsByCat = useMemo(() => {
    return products.filter(product => product.category.slug == category);
  }, [products, category]);

  return productsByCat;
};
