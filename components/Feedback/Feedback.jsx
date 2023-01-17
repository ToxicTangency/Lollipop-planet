import Image from 'next/image';
import styles from './Feedback.module.scss';

export default function Feedback() {
  return (
    <div className={styles.feedback} id='feedback'>
      <div
        className={styles.bgWrap}
        style={{
          marginTop: '0px',
        }}>
        <Image
          alt='main'
          src={'/feedback-back.png'}
          quality={100}
          fill
          sizes='100vw'
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='feedback__container'>
        <div className={styles.feedbackContent}>
          <div className={styles.title}>
            Остались вопросы
            <span
              style={{
                position: 'absolute',
                marginLeft: '5px',
              }}>
              ?
            </span>
            <br /> напишите нам{' '}
          </div>
          <div className={styles.form}>
            <form>
              <input type='email' placeholder='Введите ваш email' />
              <button>Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
