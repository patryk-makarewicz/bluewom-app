import * as actionTypes from './types-favorites';

export const addToFavorites = (itemID) => ({
  type: actionTypes.ADD_TO_FAVORITES,
  payload: {
    id: itemID,
  },
});

export const removeFromFavorites = (itemID) => ({
  type: actionTypes.REMOVE_FROM_FAVORITES,
  payload: {
    id: itemID,
  },
});
