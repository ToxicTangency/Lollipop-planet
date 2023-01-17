import Image from 'next/image';
import styles from '../styles/Footer.module.scss';
import Navbar from './navbar/Navbar';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='footer__container'>
        <div className={styles.logo}>
          <Image
            src={'/logo.png'}
            alt='logo'
            width={115}
            height={90}
            style={{ position: 'absolute' }}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.col}>
            <div className={styles.text}>
              Веганские сладости на основе растительных компонентов
            </div>

            <div className={styles.socials}>
              {/* <div className={styles.title}>Follow Us</div> */}
              <div className={styles.icons}></div>
            </div>
          </div>

          <div className={styles.col}>
            <Navbar />
          </div>

          <div className={styles.col}>
            <div className={styles.title}>Новостная рассылка</div>
            <form className={styles.form}>
              <input type='text' placeholder='Ваш Email' />
              <button>Подписаться</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
