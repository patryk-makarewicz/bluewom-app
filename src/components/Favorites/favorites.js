import React from 'react';
import { connect } from 'react-redux';

const Favorites = ({ favCart }) => {
  return (
    <div>
      <h1>Favorites</h1>
      {favCart.map((favCurrency) => (
        <div key={favCurrency.code}>
          <div>{favCurrency.code}</div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  favCart: state.currencies.favCart,
});

export default connect(mapStateToProps)(Favorites);
