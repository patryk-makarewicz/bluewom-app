import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../../redux/Currencies/actions-currencies';

import styles from './currencies.module.scss';
import Currency from './components/currency';

const Currencies = (props) => {
  const { currencies, isLoading } = props;

  useEffect(() => {
    props.fetchCurrencies();
  }, []);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <div className={styles.wrapper}>
        {currencies.map((currency) => (
          <Currency currency={currency} key={currency.code} />
        ))}
      </div>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
