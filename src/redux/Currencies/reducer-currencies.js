/* eslint-disable no-shadow */
/* eslint-disable no-case-declarations */
/* eslint-disable no-unneeded-ternary */
import * as actionTypes from './types-currencies';

const INITIAL_STATE = {
  currencies: [],
  favCart: [],
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
    case actionTypes.ADD_TO_FAVORITES:
      const item = state.currencies.find((currency) => currency.code === action.payload.id);
      const inFavCart = state.favCart.find((item) =>
        item.id === action.payload.id ? true : false,
      );
      return {
        ...state,
        favCart: inFavCart
          ? state.favCart.map((item) => (item.id === action.payload.id ? { ...state } : item))
          : [...state.favCart, { ...item }],
      };
    default:
      return state;
  }
};

export default currenciesReducer;
