import React from 'react';

import Currencies from '../../components/Currencies/currencies';
import styles from './Currencies.module.scss';

const CurrenciesView = () => (
  <div className={styles.wrapper}>
    <p className={styles.currencies}>Add your currencies to favorites and check their value.</p>
    <Currencies />
  </div>
);

export default CurrenciesView;
