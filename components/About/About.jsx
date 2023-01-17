import Image from 'next/image';
import CloudButton from '../UI/cloud-button/CloudButton';
import styles from './About.module.scss';

export default function About() {
  return (
    <div className={styles.about} id='about'>
      <div
        className={styles.bgWrap}
        style={{
          marginTop: '0px',
        }}>
        <Image
          alt='main'
          src={'/second-back.png'}
          quality={100}
          fill
          sizes='100vw'
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='about__container'>
        <div className={styles.aboutContent}>
          <div className={styles.title}>О продукции</div>
          <div className={styles.text}>
            Наши веганские сладости изготовлены на основе растительного молока
            (соевого, рисового, овсяного) с добавлением подсластителей (эритрит,
            сукралоза, стевия). Подходят для употребления больными диабетом,
            цеакилией и аллергией
          </div>
          <CloudButton>Узнать больше</CloudButton>
        </div>
      </div>
    </div>
  );
}
