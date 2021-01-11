import React from 'react';

import styles from './CurrencyElement.module.scss';

const CurrencyElement = ({ code, mid }) => {
  return (
    <div className={styles.wrapper}>
      <div>{code}</div>
      <div>{mid}</div>
      <button className={styles.button} type="button">
        +
      </button>
    </div>
  );
};

export default CurrencyElement;
