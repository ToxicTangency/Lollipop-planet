import Image from 'next/image';
import styles from './style.module.scss';
import { useSelector } from 'react-redux';

export default function CartButton() {
  const cart = useSelector(state => state.cart);
  return (
    <button className={styles.cartButton}>
      <Image src={'/cart.png'} alt='cart' width={23} height={21} />
      <div>Корзина</div>
      <span>{cart.length}</span>
    </button>
  );
}
