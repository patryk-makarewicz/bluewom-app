import * as actionTypes from './types-currencies';

const INITIAL_STATE = {
  currencies: [],
  isLoading: false,
  isError: false,
};

const currenciesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENCIES_REQUESTED:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.FETCH_CURRENCIES_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        currencies: action.payload,
      };
    case actionTypes.FETCH_CURRENCIES_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default currenciesReducer;
