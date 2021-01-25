import React from 'react';

import styles from './CurrencyElement.module.scss';

const CurrencyElement = ({ code, currency, mid, addToFavorites }) => {
  return (
    <div className={styles.wrapper}>
      <div>{code}</div>
      <div>{mid}</div>
      <button
        className={styles.button}
        type="button"
        onClick={() => addToFavorites({ code, mid, currency })}
      >
        +
      </button>
    </div>
  );
};

export default CurrencyElement;
