/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';

const Favorite = () => {
  return (
    <div>
      <h2>Fav</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favItem: state.favItem,
});

export default connect(mapStateToProps)(Favorite);
