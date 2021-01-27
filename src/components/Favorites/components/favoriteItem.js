/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { removeFromFavorites } from '../../../redux/Currencies/actions-currencies';

const FavoriteItem = ({ favCurrency, removeFromFavorites }) => {
  return (
    <div key={favCurrency.code}>
      <div>{favCurrency.code}</div>
      <button type="button" onClick={() => removeFromFavorites(favCurrency.code)}>
        Remove
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorites: (id) => dispatch(removeFromFavorites(id)),
});

export default connect(null, mapDispatchToProps)(FavoriteItem);
