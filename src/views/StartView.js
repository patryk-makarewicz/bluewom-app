import React from 'react';

import Button from '@material-ui/core/Button';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import styles from './StartView.module.scss';

const StartView = () => (
  <div className={styles.wrapper}>
    <div className={styles.inner__wrapper}>
      <MonetizationOnIcon style={{ fontSize: 250 }} color="primary" />
      <header className={styles.header}>
        <h1 className={styles.header__title}>CURRENCY APP</h1>
        <p className={styles.header__paragraph}>
          This is an app for checking the value of your favorite currencies from Bank NBP.
        </p>
        <Button variant="outlined" color="primary">
          <span className={styles.header__button}>GET STARTED</span>
        </Button>
      </header>
    </div>
  </div>
);

export default StartView;
