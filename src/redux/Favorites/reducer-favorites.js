/* eslint-disable no-shadow */
/* eslint-disable no-case-declarations */
import * as actionTypes from './types-favorites';
import currenciesReducer from '../Currencies/reducer-currencies';

const INITIAL_STATE = {
  currencies: currenciesReducer,
  favoritesList: [],
};

const favoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_FAVORITES:
      const item = state.currencies.find((currency) => currency.code === action.payload.id);
      const inFavoritesList = state.favoritesList.find(
        (currency) => currency.code === action.payload.id,
      );
      return {
        ...state,
        favoritesList: inFavoritesList
          ? state.favoritesList.filter((item) => item.code !== action.payload.id)
          : [...state.favoritesList, { ...item }],
      };
    case actionTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoritesList: state.favoritesList.filter((item) => item.code !== action.payload.id),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
