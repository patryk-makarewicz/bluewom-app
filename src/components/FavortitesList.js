import React from 'react';

import styles from './FavoritesList.module.scss';

const FavoritesList = ({ fav }) => {
  return (
    <div className={styles.wrapper}>
      <h1>Your favorite currencies</h1>
      <div>{fav}</div>
    </div>
  );
};

export default FavoritesList;
