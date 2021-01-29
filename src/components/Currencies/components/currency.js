/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { addToFavorites } from '../../../redux/Currencies/actions-currencies';

import styles from './currency.module.scss';

const Currency = ({ currency, addToFavorites }) => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.currency}>
        <div className={styles.currency__name}>{currency.currency}</div>
        <div className={styles.currency__value}>
          <div>{currency.code}</div>
          <div>{currency.mid} PLN</div>
        </div>
      </div>
      <div className={styles.currency__star}>
        <button
          className={styles.currency__button}
          type="button"
          onClick={() => addToFavorites(currency.code)}
        >
          {clicked === false ? (
            <FavoriteBorderIcon style={{ fontSize: 30 }} color="primary" onClick={handleClicked} />
          ) : (
            <FavoriteIcon style={{ fontSize: 30 }} color="primary" onClick={handleClicked} />
          )}
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (id) => dispatch(addToFavorites(id)),
});

export default connect(null, mapDispatchToProps)(Currency);
