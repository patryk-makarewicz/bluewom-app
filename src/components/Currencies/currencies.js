import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import { fetchCurrencies } from '../../redux/Currencies/actions-currencies';
import Currency from './components/currency';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1280px;
`;

const Alert = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 40px;
  text-shadow: 0px 1px 1px var(--gray-dark);
  color: var(--main-blue);
  letter-spacing: 1px;
  width: 100vw;
`;

const Currencies = (props) => {
  const { currencies, isLoading, isError } = props;

  useEffect(() => {
    props.fetchCurrencies();
  }, []);

  return (
    <>
      {isError && <Alert>UPSS...PLEASE TRY AGAIN</Alert>}
      {isLoading && (
        <Alert>
          LOADING... <CircularProgress />
        </Alert>
      )}
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
