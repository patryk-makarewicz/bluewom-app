const FETCH_CURRENCIES_REQUESTED = '/currency/FETCH_CURRENCY_REQUESTED';
const FETCH_CURRENCIES_SUCCEEDED = '/currency/FETCH_CURRENCY_SUCCEEDED';
const FETCH_CURRENCIES_FAILED = '/currency/FETCH_CURRENCY_FAILED';

const INITIAL_STATE = {
  currencies: [],
  isLoading: false,
  isError: false,
};

const fetchRequested = () => ({ type: FETCH_CURRENCIES_REQUESTED });
const fetchSucceeded = (data) => ({ type: FETCH_CURRENCIES_SUCCEEDED, payload: data });
const fetchFailed = () => ({ type: FETCH_CURRENCIES_FAILED });

export const fetchCurrencies = () => {
  // eslint-disable-next-line func-names
  return function (dispatch) {
    dispatch(fetchRequested());
    fetch('http://api.nbp.pl/api/exchangerates/tables/A/')
      .then((response) => response.json())
      .then((currencies) => {
        dispatch(fetchSucceeded(currencies[0].rates));
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        dispatch(fetchFailed());
      });
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CURRENCIES_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_CURRENCIES_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        currencies: action.payload,
      };
    case FETCH_CURRENCIES_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
