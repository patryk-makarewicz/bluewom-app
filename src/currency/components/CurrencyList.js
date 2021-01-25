import React from 'react';

import styles from './CurrencyList.module.scss';
import CurrencyElement from './CurrencyElement';

function CurrencyList({ currencies, addToFavorites }) {
  return (
    <div className={styles.wrapper}>
      {currencies.map((currency) => (
        <CurrencyElement
          key={currency.code}
          id={currency.code}
          code={currency.code}
          mid={currency.mid}
          currency={currency.currency}
          addToFavorites={addToFavorites}
        />
      ))}
    </div>
  );
}

export default CurrencyList;
