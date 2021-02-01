import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchCurrencies } from '../../redux/Currencies/actions-currencies';

import Currency from './components/currency';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1280px;
`;

const Currencies = (props) => {
  const { currencies, isLoading } = props;

  useEffect(() => {
    props.fetchCurrencies();
  }, []);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <Wrapper>
        {currencies.map((currency) => (
          <Currency currency={currency} key={currency.code} />
        ))}
      </Wrapper>
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
