import React from 'react';
import { NavLink } from 'react-router-dom';

import EuroIcon from '@material-ui/icons/Euro';
import styles from './menu.module.scss';
import NavigationBar from './components/navigation-bar';

const Menu = () => (
  <header className={styles.wrapper}>
    <div className={styles.menu}>
      <NavLink className={styles.logo__link} to="/">
        <div className={styles.logo}>
          <EuroIcon style={{ fontSize: 20, color: 'white', marginTop: '-1px' }} />
          <p className={styles.logo__title}>URRENCY APP</p>
        </div>
      </NavLink>
      <NavigationBar />
    </div>
  </header>
);

export default Menu;
