import styles from './CartPage.module.scss';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import OrderForm from './OrderForm';

export default function CartPage() {
  const cart = useSelector(state => state.cart);

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  const total = getTotalPrice();

  return (
    <div className={styles.cartPage}>
      {cart.length === 0 ? (
        <div className='cart__container'>
          <div>Ваша корзина пуста</div>
        </div>
      ) : (
        <div className='cart__container'>
          <div className={styles.cartList}>
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className={styles.total}>
            <div className={styles.price}>{total} ₽</div>
          </div>

          <OrderForm total={total} order={cart} />
        </div>
      )}
    </div>
  );
}
