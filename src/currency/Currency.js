import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from 'reducers';

import CurrencyList from './components/CurrencyList';

const Currency = (props) => {
  const { currencies, isLoading } = props;
  const fetchData = () => {
    props.fetchCurrencies();
  };
  return (
    <div>
      <h1>Chose Your favorite currencies</h1>
      <div>
        {isLoading && <p>Loading...</p>}
        <button type="button" onClick={fetchData}>
          Fetch
        </button>
        <CurrencyList currencies={currencies} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currencies: state.currencies,
  isLoading: state.isLoading,
  isError: state.isError,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Currency);
