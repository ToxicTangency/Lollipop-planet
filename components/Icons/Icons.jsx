import Image from 'next/image';
import styles from './Icons.module.scss';

export default function Icons() {
  return (
    <div className={styles.icons}>
      <div className='icons__container'>
        <div className={styles.row}>
          <div className={styles.icon}>
            <div className={styles.image}>
              <Image
                src={'/icon1.png'}
                alt='Free Shipping'
                width={75}
                height={57}
                quality={100}
              />
            </div>
            <div className={styles.title}>Бесплатная доставка</div>
            <div className={styles.text}>
              Вам не нужно дополнительно оплачивать доставку
            </div>
          </div>

          <div className={styles.icon}>
            <div className={styles.image}>
              <Image
                src={'/icon2.png'}
                alt='Quick Packaging'
                width={53}
                height={64}
                quality={100}
              />
            </div>
            <div className={styles.title}>Качественная упаковка</div>
            <div className={styles.text}>
              Мы упаковываем в термо-контейнеры с учетом погоды
            </div>
          </div>

          <div className={styles.icon}>
            <div className={styles.image}>
              <Image
                src={'/icon3.png'}
                alt='100% Money Back'
                width={77}
                height={72}
                quality={100}
              />
            </div>
            <div className={styles.title}>Большой кэшбек</div>
            <div className={styles.text}>Кэшбек на каждую покупку!</div>
          </div>

          <div className={styles.icon}>
            <div className={styles.image}>
              <Image
                src={'/icon4.png'}
                alt='Fast Delivery'
                width={80}
                height={56}
                quality={100}
              />
            </div>
            <div className={styles.title}>Быстрая доставка</div>
            <div className={styles.text}>Доставим в течение 30 минут</div>
          </div>
        </div>
      </div>
    </div>
  );
}
