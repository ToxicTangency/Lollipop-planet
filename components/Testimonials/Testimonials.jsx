import Image from 'next/image';
import styles from './Testimonials.module.scss';

export default function Testimonials() {
  return (
    <div className={styles.testimonials} id='reviews'>
      <div className={styles.card}>
        <div className={styles.person}>
          <div className={styles.avatar}>
            <Image src={'/avatar.png'} width={60} height={60} alt='avatar' />
          </div>
          <div className={styles.name}>Аделина Николаева</div>
        </div>
        <div className={styles.text}>
          Отличный сервис, прекрасная подача! Привезли быстро, мороженое было
          плотно упаковано в термо-коробку, поэтому доехало целым.
        </div>
        <div className={styles.navigation}>
          <div className={styles.item}>
            <Image src={'/avatar.png'} width={35} height={35} alt='avatar' />
          </div>
          <div className={styles.item}>
            <Image src={'/avatar.png'} width={55} height={55} alt='avatar' />
          </div>
          <div className={styles.item}>
            <Image src={'/avatar.png'} width={35} height={35} alt='avatar' />
          </div>
        </div>
      </div>
    </div>
  );
}
