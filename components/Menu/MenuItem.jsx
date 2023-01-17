import Image from 'next/image';
import Link from 'next/link';
import styles from './Menu.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from '../../strore/cart.slice';

export default function MenuItem({ product }) {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);

  const existingItem = cart.find(item => item.id === product.id);

  return (
    <div className={styles.menuItem}>
      <div className={styles.image}>
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.image.url}
            alt='viennese-wood'
            width={559}
            height={418}
          />
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.name}>
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </div>
        <div className={styles.description}>{product.description}</div>
        <div className={styles.price}>{product.price} ₽</div>
        {existingItem ? (
          <div className={styles.inCart}>
            <button
              onClick={() => dispatch(addToCart(product))}
              className={styles.addToCart}>
              Добавлено
            </button>
            <div className={styles.quantity}>
              <span
                onClick={() => dispatch(decrementQuantity(existingItem.id))}>
                -
              </span>
              {existingItem.quantity}{' '}
              <span
                onClick={() => dispatch(incrementQuantity(existingItem.id))}>
                +
              </span>
            </div>
          </div>
        ) : (
          <button
            onClick={() => dispatch(addToCart(product))}
            className={styles.addToCart}>
            В корзину
          </button>
        )}
      </div>
    </div>
  );
}
