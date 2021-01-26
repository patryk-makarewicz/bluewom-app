/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';

const Favorite = ({ favItem }) => {
  return (
    <div>
      <h2>Fav</h2>
      <p>{favItem}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favItem: state.favItem,
});

export default connect(mapStateToProps)(Favorite);
