import Image from 'next/image';
import styles from '../styles/Header.module.scss';
import Navbar from './navbar/Navbar';
import CartButton from './UI/cart-button/CartButton';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';

let timeout;
// let scroll = 0;

export default function Header() {
  const router = useRouter();

  const isMain = router.pathname == '/';

  useEffect(() => {
    window.onscroll = () => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        if (window.scrollY > 300) {
          document.getElementById('header').classList.add('sticky');
        } else {
          document.getElementById('header').classList.remove('sticky');
        }

        scroll = window.scrollY;
      }, 10);
    };
  }, []);

  return (
    <header id='header' className={styles.secondHeader}>
      <div className='header__container desktop-header'>
        <div className={styles.headerWrapper}>
          <div className={styles.logo}>
            <Link href={'/'}>
              {isMain ? (
                <Image
                  className='logo-img'
                  src={'/logo.png'}
                  alt='logo'
                  width={223}
                  height={177}
                  quality={100}
                  style={{ position: 'absolute' }}
                />
              ) : (
                <Image
                  src={'/logo.png'}
                  alt='logo'
                  width={74}
                  height={59}
                  style={{ position: 'absolute' }}
                />
              )}
            </Link>
          </div>

          <Navbar />

          <Link href={'/cart'}>
            <CartButton />
          </Link>
        </div>
      </div>
      <div className='mobile-header'>
        <Menu>
          <Navbar />
          <Link href={'/cart'}>
            <CartButton />
          </Link>
        </Menu>
      </div>
    </header>
  );
}
