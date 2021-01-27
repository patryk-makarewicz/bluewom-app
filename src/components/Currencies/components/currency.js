import React from 'react';

import styles from './currency.module.scss';

const Currency = ({ currency }) => {
  return (
    <div className={styles.wrapper}>
      <div>{currency.code}</div>
      <div>{currency.mid}</div>
      <button className={styles.button} type="button">
        +
      </button>
    </div>
  );
};

export default Currency;
