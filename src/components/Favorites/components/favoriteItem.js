/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import StarIcon from '@material-ui/icons/Star';
import { removeFromFavorites } from '../../../redux/Currencies/actions-currencies';

import './favoritesItem.scss';

const FavoriteItem = ({ favCurrency, removeFromFavorites }) => {
  return (
    <div className="wrapper">
      <div className="currency">
        <div className="currency__name">{favCurrency.currency}</div>
        <div className="currency__value">
          <div>{favCurrency.code}</div>
          <div>{favCurrency.mid.toFixed(4)} PLN</div>
        </div>
      </div>
      <div className="currency__star">
        <button
          className="currency__button"
          type="button"
          onClick={() => removeFromFavorites(favCurrency.code)}
        >
          <StarIcon style={{ fontSize: 30, color: '#fbc02d' }} />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorites: (id) => dispatch(removeFromFavorites(id)),
});

export default connect(null, mapDispatchToProps)(FavoriteItem);
