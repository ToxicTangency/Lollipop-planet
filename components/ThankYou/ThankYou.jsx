import Image from 'next/image';
import Link from 'next/link';
import styles from './ThankYou.module.scss';

export default function ThankYou() {
  return (
    <div className={styles.thanksPage}>
      <div
        className={styles.bgWrap}
        style={{
          marginTop: '0px',
        }}>
        <Image
          alt='main'
          src={'/thank-you.png'}
          quality={100}
          fill
          sizes='100vw'
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='thanks__container'>
        <div className={styles.heroContent}>
          <div className={styles.title}>Спасибо за заказ!</div>
          <div className={styles.text}>
            Мы свяжемся с вами по телефону, который вы указали
          </div>
          <div className={styles.backToMain}>
            <Link href={'/'}>Вернуться на главную</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
