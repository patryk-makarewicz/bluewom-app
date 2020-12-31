import React, { useState } from 'react';

import styles from './FavoritesList.module.scss';

const FavoritesList = ({ fav }) => {
  const [state, setState] = useState([fav]);

  const clearList = () => {
    setState([]);
  };

  console.log(state);

  return (
    <div className={styles.wrapper}>
      <h1>Your favorite currencies</h1>
      <div>
        <p>FavList</p>
        <div>
          <>
            {state.map((favItem) => (
              <div key={favItem}>{favItem}</div>
            ))}
          </>
          <button type="button" onClick={clearList}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoritesList;
