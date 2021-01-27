import * as actionTypes from './types-currencies';

const fetchRequested = () => ({ type: actionTypes.FETCH_CURRENCIES_REQUESTED });
const fetchSucceeded = (data) => ({ type: actionTypes.FETCH_CURRENCIES_SUCCEEDED, payload: data });
const fetchFailed = () => ({ type: actionTypes.FETCH_CURRENCIES_FAILED });

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

export const addToFavorites = (itemID) => ({
  type: actionTypes.ADD_TO_FAVORITES,
  payload: {
    id: itemID,
  },
});

export const RemoveFromFavorites = (itemID) => ({
  type: actionTypes.REMOVE_FROM_FAVORITES,
  payload: {
    id: itemID,
  },
});
