import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Badge from '@material-ui/core/Badge';
import StarIcon from '@material-ui/icons/Star';
import Currencies from '../../components/Currencies/currencies';
import styles from './Currencies.module.scss';

const CurrenciesView = ({ favCart }) => (
  <div className={styles.wrapper}>
    <p className={styles.currencies}>Add your currencies to favorites and check their value.</p>
    <p className={styles.currencies}>
      You have in favorites
      <NavLink className={styles.currencies__link} to="/favorites">
        <Badge badgeContent={favCart.length} color="secondary" showZero style={{ zIndex: '-1000' }}>
          <StarIcon
            style={{ fontSize: 40, color: '#fbc02d', marginBottom: '5px', zIndex: '-1000' }}
          />
        </Badge>
      </NavLink>
    </p>

    <Currencies />
  </div>
);

const mapStateToProps = (state) => ({
  favCart: state.currencies.favCart,
});

export default connect(mapStateToProps)(CurrenciesView);
