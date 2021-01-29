import React from 'react';
import { NavLink } from 'react-router-dom';

import EuroIcon from '@material-ui/icons/Euro';
import styles from './StartView.module.scss';

const StartView = () => (
  <div className={styles.wrapper}>
    <div className={styles.inner__wrapper}>
      <EuroIcon style={{ fontSize: 200 }} color="primary" />
      <header className={styles.header}>
        <h1 className={styles.header__title}>CURRENCY APP</h1>
        <p className={styles.header__paragraph}>
          This is an app for checking the value of your favorite currencies from Bank NBP.
        </p>
        <NavLink className={styles.header__link} to="/currencies">
          GET STARTED
        </NavLink>
      </header>
    </div>
  </div>
);

export default StartView;
