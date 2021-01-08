import React from 'react';

import styles from './Currency.module.scss';

const Currency = ({ code, mid, handleAdd }) => {
  return (
    <div className={styles.wrapper}>
      <div>{code}</div>
      <div>{mid}</div>
      <button className={styles.button} type="button" onClick={handleAdd}>
        +
      </button>
    </div>
  );
};

export default Currency;
