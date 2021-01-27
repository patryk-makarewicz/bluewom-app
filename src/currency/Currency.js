import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../redux/Currencies/actions-currencies';

import styles from './Currency.module.scss';

const Currency = (props) => {
  const { currencies, isLoading } = props;

  useEffect(() => {
    props.fetchCurrencies();
  }, []);

  return (
    <div>
      <h1>Chose Your favorite currencies</h1>
      <div className={styles.hero}>
        {isLoading && <p>Loading...</p>}
        <div className={styles.wrapper}>
          {currencies.map((currency) => (
            <div className={styles.innerWrapper} key={currency.code}>
              <div>{currency.code}</div>
              <div>{currency.mid}</div>
              <button className={styles.button} type="button">
                +
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = (state) => ({
  currencies: state.currencies.currencies,
  isLoading: state.currencies.isLoading,
  isError: state.currencies.isError,
});

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
