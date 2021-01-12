const FETCH_CURRENCIES_REQUESTED = '/currency/FETCH_CURRENCY_REQUESTED';
const FETCH_CURRENCIES_SUCCEEDED = '/currency/FETCH_CURRENCY_SUCCEEDED';
const FETCH_CURRENCIES_FAILED = '/currency/FETCH_CURRENCY_FAILED';
const ADD_CURRENCIES_TO_FAVORITES = '/currency/ADD_CURRENCIES_TO_FAVORITES';

const INITIAL_STATE = {
  currencies: [],
  favorites: [],
  isLoading: false,
  isError: false,
};

const fetchRequested = () => ({ type: FETCH_CURRENCIES_REQUESTED });
const fetchSucceeded = (data) => ({ type: FETCH_CURRENCIES_SUCCEEDED, payload: data });
const fetchFailed = () => ({ type: FETCH_CURRENCIES_FAILED });

export const addToFavorites = (favItem) => ({
  type: ADD_CURRENCIES_TO_FAVORITES,
  payload: favItem,
});

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
    case ADD_CURRENCIES_TO_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.concat([action.payload]),
      };
    default:
      return state;
  }
};
