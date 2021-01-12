import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies, addToFavorites } from 'reducers';

import styles from './Currency.module.scss';
import CurrencyList from './components/CurrencyList';
import Favorite from './components/Favorite';

const mapStateToProps = (state) => ({
  currencies: state.currencies,
  isLoading: state.isLoading,
  isError: state.isError,
});

const Currency = (props) => {
  const { currencies, isLoading, favorites } = props;

  useEffect(() => {
    props.fetchCurrencies();
  }, []);

  return (
    <div>
      <h1>Chose Your favorite currencies</h1>
      <div className={styles.wrapper}>
        {isLoading && <p>Loading...</p>}
        <CurrencyList currencies={currencies} toggleAddToFav={addToFavorites} />
        <Favorite favorites={favorites} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
