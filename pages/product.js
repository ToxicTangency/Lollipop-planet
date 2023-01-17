import Feedback from '../components/Feedback/Feedback';
import MainContainer from '../components/MainContainer';
import ProductPage from '../components/ProductPage/ProductPage';
import Testimonials from '../components/Testimonials/Testimonials';

export default function Product() {
  return (
    <MainContainer title={'Product'}>
      <ProductPage />
      <Testimonials />
      <Feedback />
    </MainContainer>
  );
}
