import cl from './Loader.module.scss';

export default function MiniLoader() {
  return (
    <div className={cl.miniLoader}>
      <div className={cl.spinWrapper}>
        <div className={cl.spin}>
          <div className={cl.spinInner}></div>
        </div>
        <b className={cl.text}>Загрузка...</b>
      </div>
    </div>
  );
}
