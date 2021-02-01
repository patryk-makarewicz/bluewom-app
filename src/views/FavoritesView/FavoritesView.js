import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Badge from '@material-ui/core/Badge';
import StarIcon from '@material-ui/icons/Star';
import Favorites from '../../components/Favorites/favorites';
import styles from './Favorites.module.scss';

const CurrenciesView = ({ favCart }) => (
  <div className={styles.wrapper}>
    <p className={styles.favorites}>
      Your favorites currencies
      <Badge badgeContent={favCart.length} color="secondary" showZero style={{ zIndex: '-1000' }}>
        <StarIcon
          style={{ fontSize: 40, color: '#fbc02d', marginBottom: '5px', zIndex: '-1000' }}
        />
      </Badge>
    </p>
    {favCart.length === 0 ? (
      <div className={styles.favorites}>
        <div>Pusto</div>
      </div>
    ) : (
      <Favorites />
    )}

    <p className={styles.favorites}>
      <NavLink className={styles.favorites__button} to="/currencies">
        BACK TO LIST
      </NavLink>
    </p>
  </div>
);

const mapStateToProps = (state) => ({
  favCart: state.currencies.favCart,
});

export default connect(mapStateToProps)(CurrenciesView);
