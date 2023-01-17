import Link from 'next/link';
import styles from '../../styles/Header.module.scss';
import ScrollIntoView from 'react-scroll-into-view';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  const isMain = router.pathname == '/';
  return (
    <nav className={styles.navBar}>
      {!isMain ? (
        <ul>
          <li className={styles.navBarElem}>
            <Link href={'/#hero'}>Главная</Link>
          </li>
          <li className={styles.navBarElem}>
            <Link href={'/#about'}>О продукте</Link>
          </li>
          <li className={styles.navBarElem}>
            <Link href={'/#menu'}>Меню</Link>
          </li>
          <li className={styles.navBarElem}>
            <Link href={'/#reviews'}>Отзывы</Link>
          </li>
          <li className={styles.navBarElem}>
            <Link href={'/#feedback'}>Связь</Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li className={styles.navBarElem}>
            <ScrollIntoView selector='#hero'>
              <div>Главная</div>
            </ScrollIntoView>
          </li>
          <li className={styles.navBarElem}>
            <ScrollIntoView selector='#about'>
              <div>О продукте</div>
            </ScrollIntoView>
          </li>
          <li className={styles.navBarElem}>
            <ScrollIntoView selector='#menu'>
              <div>Меню</div>
            </ScrollIntoView>
          </li>
          <li className={styles.navBarElem}>
            <ScrollIntoView selector='#reviews'>
              <div>Отзывы</div>
            </ScrollIntoView>
          </li>
          <li className={styles.navBarElem}>
            <ScrollIntoView selector='#feedback'>
              <div>Связь</div>
            </ScrollIntoView>
          </li>
        </ul>
      )}
    </nav>
  );
}
