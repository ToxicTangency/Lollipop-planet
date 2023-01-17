import { useState } from 'react';
import About from '../components/About/About';
import Feedback from '../components/Feedback/Feedback';
import Hero from '../components/Hero/Hero';
import Icons from '../components/Icons/Icons';
import MainContainer from '../components/MainContainer';
import Menu from '../components/Menu/Menu';
import Testimonials from '../components/Testimonials/Testimonials';
import { useProducts } from '../hooks/useProducts';
import { loadCategories } from './api/categories';
import { loadProducts } from './api/products';

export default function Home({ initialProducts, initialCategories }) {
  const [products, setProducts] = useState(initialProducts);
  const [categories, setCategories] = useState(initialCategories);
  const [category, setCategory] = useState('ice-creams');
  const productsByCat = useProducts(products, category);

  const changeCategory = value => {
    setCategory(value);
  };

  return (
    <MainContainer title={'Main'}>
      <Hero />
      <Icons />
      <About />
      <Menu
        products={productsByCat}
        change={changeCategory}
        categories={categories}
        category={category}
      />
      <Testimonials />
      <Feedback />
    </MainContainer>
  );
}

export const getServerSideProps = async () => {
  const { products } = await loadProducts();
  const { categories } = await loadCategories();
  return {
    props: {
      initialProducts: products,
      initialCategories: categories,
    },
  };
};

// const changeCategory = async () => {
//   try {
//     const data = await fetch(`/api/products?category=${category}`).then(
//       response => response.json()
//     );
//     console.log(data.products);
//     console.log(products);
//     setProducts([...products, ...data.products]);
//   } catch (error) {
//     console.log(error);
//   }
// };
