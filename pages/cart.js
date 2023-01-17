import Feedback from '../components/Feedback/Feedback';
import MainContainer from '../components/MainContainer';
import CartPage from '../components/Cart/CartPage';

export default function Cart() {
  return (
    <MainContainer title={'Cart'}>
      <CartPage />
      <Feedback />
    </MainContainer>
  );
}
