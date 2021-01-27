import React from 'react';
import { connect } from 'react-redux';

import FavoriteItem from './components/favoriteItem';

const Favorites = ({ favCart }) => {
  return (
    <div>
      <h1>Favorites</h1>
      {favCart.map((favCurrency) => (
        <FavoriteItem key={favCurrency.code} favCurrency={favCurrency} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  favCart: state.currencies.favCart,
});

export default connect(mapStateToProps)(Favorites);
