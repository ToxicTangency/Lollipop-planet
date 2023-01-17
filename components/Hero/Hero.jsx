import Image from 'next/image';
import CloudButton from '../UI/cloud-button/CloudButton';
import styles from './Hero.module.scss';
import ScrollIntoView from 'react-scroll-into-view';

export default function Hero() {
  return (
    <div className={styles.hero} id='hero'>
      <div
        className={styles.bgWrap}
        style={{
          marginTop: '0px',
        }}>
        <Image
          alt='main'
          src={'/main-back.png'}
          quality={100}
          fill
          sizes='100vw'
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='hero__container'>
        <div className={styles.heroContent}>
          <div className={styles.subTitle}>
            Молочно и сладко без молока и сахара
          </div>
          <div className={styles.title}>
            Ощути сладкое безумие{' '}
            <span style={{ color: '#F233A1' }}>без сахара</span>
          </div>
          <div className={styles.text}>
            Наши веганские сладости изготовлены на основе растительного молока
            (соевого, рисового, овсяного) с добавлением подсластителей (эритрит,
            сукралоза, стевия)
          </div>
          <ScrollIntoView selector='#menu'>
            <CloudButton>Выбрать</CloudButton>
          </ScrollIntoView>
        </div>
      </div>
    </div>
  );
}
