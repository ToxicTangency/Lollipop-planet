import Image from 'next/image';
import styles from './style.module.scss';

export default function CloudButton({ children }) {
  return (
    <button className={styles.cloudButton}>
      <Image
        src={'/cloud-back.png'}
        alt='cart'
        width={250}
        height={75}
        style={{ position: 'absolute', marginTop: '-6px' }}
      />
      <div>{children}</div>
    </button>
  );
}
