import React from 'react';
import { NavLink } from 'react-router-dom';

import EuroIcon from '@material-ui/icons/Euro';
import styles from './startFrame.module.scss';

const StartFrame = () => (
  <div className={styles.wrapper}>
    <EuroIcon style={{ fontSize: 200 }} color="primary" />
    <header className={styles.frame}>
      <h1 className={styles.frame__title}>CURRENCY APP</h1>
      <p className={styles.frame__paragraph}>
        This is an app for checking the value of your favorite currencies from Bank NBP.
      </p>
      <NavLink className={styles.frame__link} to="/currencies">
        GET STARTED
      </NavLink>
    </header>
  </div>
);

export default StartFrame;
