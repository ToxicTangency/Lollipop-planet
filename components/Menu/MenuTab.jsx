import styles from './Menu.module.scss';

export default function MenuTab({ category, change, activeCategory }) {
  const isActive = category.slug === activeCategory;

  return (
    <div
      className={isActive ? styles.menuTabActive : styles.menuTab}
      onClick={() => change(category.slug)}>
      {category.title}
    </div>
  );
}
