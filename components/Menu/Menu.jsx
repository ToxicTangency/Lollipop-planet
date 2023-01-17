import { useState } from 'react';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import MenuTab from './MenuTab';

export default function Menu({ products, change, categories, category }) {
  const [activeCategory, setActiveCategory] = useState(category);

  const menuChange = value => {
    change(value);
    setActiveCategory(value);
  };

  return (
    <div className={styles.menu} id='menu'>
      <div className='menu__container'>
        <div className={styles.title}>Меню</div>

        <div className={styles.menuTabs}>
          {categories.map(category => (
            <MenuTab
              key={category.slug}
              category={category}
              change={menuChange}
              activeCategory={activeCategory}
            />
          ))}
        </div>

        <div className={styles.menuList}>
          {products.map(product => (
            <MenuItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
