/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './menuLink.module.scss';

const MenuLink = ({ closeMenu }) => (
  <ul className={styles.navList}>
    <li className={styles.navItem} onClick={closeMenu}>
      <NavLink
        exact
        activeClassName={styles.navItemLinkActive}
        className={styles.navItemLink}
        to="/"
      >
        Start
      </NavLink>
    </li>
    <li className={styles.navItem} onClick={closeMenu}>
      <NavLink
        activeClassName={styles.navItemLinkActive}
        className={styles.navItemLink}
        to="/currencies"
      >
        Currencies
      </NavLink>
    </li>
    <li className={styles.navItem} onClick={closeMenu}>
      <NavLink
        activeClassName={styles.navItemLinkActive}
        className={styles.navItemLink}
        to="/favorites"
      >
        Favorites
      </NavLink>
    </li>
  </ul>
);

export default MenuLink;
