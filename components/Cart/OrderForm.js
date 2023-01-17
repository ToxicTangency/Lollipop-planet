import React, { useRef, useState } from 'react';
import { submitOrder } from '../../lib/getOrder';
import styles from './CartPage.module.scss';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../strore/cart.slice';
import MiniLoader from '../Loader/MiniLoader';

export default function OrderForm({ ...props }) {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const nameEl = useRef();
  const phoneEl = useRef();
  const emailEl = useRef();
  const addressEl = useRef();

  const orderListArray = props.order.map(
    item => `${item.name} x ${item.quantity} - ${item.quantity * item.price} \n`
  );

  const orderListEl = JSON.stringify(orderListArray);

  const handleOrderSubmission = e => {
    e.preventDefault();
    setError(false);
    // const { value: order } = orderEl.current;
    const { value: name } = nameEl.current;
    const { value: phone } = phoneEl.current;
    const { value: email } = emailEl.current;
    const { value: address } = addressEl.current;
    const total = props.total;
    const orderList = orderListEl;
    if (!orderList || !name || !phone) {
      setError(error);
      return;
    }
    const orderObj = {
      name,
      phone,
      email,
      address,
      total,
      orderList,
    };
    submitOrder(orderObj).then(res => {
      setIsLoading(true);
      dispatch(clearCart());
      router.push('/thanks');
    });
  };

  return (
    <div className={styles.checkout}>
      <div className={styles.title}>Доставка</div>

      <form className={styles.form}>
        <div className={styles.col}>
          <div className={styles.row}>
            <input
              className={styles.field}
              type='text'
              placeholder='Введите ваше имя'
              ref={nameEl}
              required
            />
            <input
              className={styles.field}
              type='tel'
              placeholder='Введите ваш номер телефона'
              ref={phoneEl}
              required
            />
          </div>

          <div className={styles.row}>
            <input
              className={styles.field}
              type='email'
              placeholder='Введите ваш email'
              ref={emailEl}
              required
            />
            <input
              className={styles.field}
              type='text'
              placeholder='Введите ваш адресс'
              ref={addressEl}
              required
            />
          </div>
          <div className={styles.row}>
            <button onClick={handleOrderSubmission} className={styles.payBtn}>
              Сделать заказ
            </button>
          </div>
        </div>
        {isLoading && <MiniLoader />}
      </form>
    </div>
  );
}
