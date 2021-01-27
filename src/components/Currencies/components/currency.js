/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { addToFavorites } from '../../../redux/Currencies/actions-currencies';

import styles from './currency.module.scss';

const Currency = ({ currency, addToFavorites }) => {
  return (
    <div className={styles.currency}>
      <div>{currency.code}</div>
      <div>{currency.mid}</div>
      <button
        className={styles.currency__button}
        type="button"
        onClick={() => addToFavorites(currency.code)}
      >
        +
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (id) => dispatch(addToFavorites(id)),
});

export default connect(null, mapDispatchToProps)(Currency);
