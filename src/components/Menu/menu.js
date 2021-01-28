import React from 'react';

import EuroIcon from '@material-ui/icons/Euro';
import styles from './menu.module.scss';
import HamburgerButton from './hamburger';

const Menu = () => (
  <header className={styles.wrapper}>
    <div className={styles.menu}>
      <div className={styles.logo}>
        <EuroIcon style={{ fontSize: 20, color: 'white' }} />
        <p className={styles.logo__title}>URRENCY APP</p>
      </div>
      <HamburgerButton />
    </div>
  </header>
);

export default Menu;
