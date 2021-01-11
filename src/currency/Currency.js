import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from 'reducers';

import CurrencyList from './components/CurrencyList';

const mapStateToProps = (state) => ({
  currencies: state.currencies,
  isLoading: state.isLoading,
  isError: state.isError,
});

const Currency = (props) => {
  const { currencies, isLoading } = props;

  useEffect(() => {
    props.fetchCurrencies();
  }, []);

  return (
    <div>
      <h1>Chose Your favorite currencies</h1>
      <div>
        {isLoading && <p>Loading...</p>}
        <CurrencyList currencies={currencies} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
