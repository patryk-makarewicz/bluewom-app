import React from 'react';

import styles from './CurrencyList.module.scss';
import CurrencyElement from './CurrencyElement';

function CurrencyList({ currencies }) {
  return (
    <div className={styles.wrapper}>
      {currencies.map((currency) => (
        <CurrencyElement
          key={currency.code}
          code={currency.code}
          mid={currency.mid}
          currency={currency.currency}
        />
      ))}
    </div>
  );
}

export default CurrencyList;
