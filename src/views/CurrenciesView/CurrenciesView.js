import React from 'react';

import Currencies from '../../components/Currencies/currencies';
import styles from './Currencies.module.scss';

const CurrenciesView = () => (
  <div className={styles.wrapper}>
    <h1>CurrenciesView</h1>
    <Currencies />
  </div>
);

export default CurrenciesView;
