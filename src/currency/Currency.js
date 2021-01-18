/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from 'reducers';

import styles from './Currency.module.scss';
import CurrencyList from './components/CurrencyList';

const Currency = (props) => {
  const { currencies, isLoading } = props;

  useEffect(() => {
    props.fetchCurrencies();
  }, []);

  return (
    <div>
      <h1>Chose Your favorite currencies</h1>
      <div className={styles.wrapper}>
        {isLoading && <p>Loading...</p>}
        <CurrencyList currencies={currencies} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = (state) => ({
  favorites: state.favorites,
  currencies: state.currencies,
  isLoading: state.isLoading,
  isError: state.isError,
});

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
