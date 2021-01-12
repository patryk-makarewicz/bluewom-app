import React from 'react';

import styles from './CurrencyElement.module.scss';

const CurrencyElement = ({ code, mid, currency, toggleAddToFav }) => {
  return (
    <div className={styles.wrapper}>
      <div>{code}</div>
      <div>{mid}</div>
      <button
        className={styles.button}
        type="button"
        onClick={() => toggleAddToFav({ code, mid, currency })}
      >
        +
      </button>
    </div>
  );
};

export default CurrencyElement;
