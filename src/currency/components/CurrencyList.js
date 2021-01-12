import React from 'react';

import styles from './CurrencyList.module.scss';
import CurrencyElement from './CurrencyElement';

function CurrencyList({ currencies, toggleAddToFav }) {
  return (
    <div className={styles.wrapper}>
      {currencies.map((currency) => (
        <CurrencyElement
          key={currency.code}
          id={currency.code}
          code={currency.code}
          mid={currency.mid}
          currency={currency.currency}
          toggleAddToFav={toggleAddToFav}
          currencies={currencies}
        />
      ))}
    </div>
  );
}

export default CurrencyList;
