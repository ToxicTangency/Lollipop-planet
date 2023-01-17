import styles from './CartPage.module.scss';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../../strore/cart.slice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.cartItem}>
      <Image src={item.image.url} alt={item.name} width={237} height={177} />
      <div className={styles.info}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.type}>{item.category.title}</div>
      </div>
      <div className={styles.quantityWrapper}>
        <div className={styles.quantity}>
          <span onClick={() => dispatch(decrementQuantity(item.id))}>-</span>
          {item.quantity}{' '}
          <span onClick={() => dispatch(incrementQuantity(item.id))}>+</span>
        </div>
      </div>
      <div className={styles.price}>{item.quantity * item.price} ₽</div>
      <div
        className={styles.remove}
        onClick={() => dispatch(removeFromCart(item.id))}>
        x
      </div>
    </div>
  );
}
