import Image from 'next/image';
import styles from './ProductPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from '../../strore/cart.slice';

export default function ProductPage({ product }) {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);

  const existingItem = cart.find(item => item.id === product.id);

  return (
    <div className={styles.productPage}>
      <div className='product__container'>
        <div className={styles.product}>
          <div className={styles.image}>
            <Image
              src={product.image.url}
              alt='viennese-wood'
              width={559}
              height={418}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{product.name}</div>
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
                    onClick={() =>
                      dispatch(decrementQuantity(existingItem.id))
                    }>
                    -
                  </span>
                  {existingItem.quantity}{' '}
                  <span
                    onClick={() =>
                      dispatch(incrementQuantity(existingItem.id))
                    }>
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

        <div className={styles.tabs}>
          <div className={styles.tab}>
            <div className={styles.title}>СОСТАВ</div>
          </div>
          <div className={styles.tab}>
            <div className={styles.title}>ЭНЕРГЕТИЧЕСКАЯ ЦЕННОСТЬ</div>
          </div>
        </div>

        <div className={styles.tabContent}>
          <div className={styles.compound}>
            Яйца, рисовая мука, какао, cottage cheese 3%, рикотта, соевое
            молоко, кокосовая стружка, кокосовое молоко, подсластитель, пудра
          </div>

          <div className={styles.energy}>
            100 г содержит: Калории 169 Белки 10.7 g Жиры 10 g Углеводы 8.5 g
          </div>
        </div>
      </div>
    </div>
  );
}
