import React, { useState, useEffect } from 'react';

import styles from './Fetch.module.scss';
import CurrencyList from './CurrencyList';
import FavoritesList from './FavortitesList';

const Fetch = () => {
  const [currencies, setCurrencies] = useState([]);
  const [error, setError] = useState(false);
  const [fav, setFav] = useState([]);

  const handleAdd = (e) => {
    setFav(e.target.id);
  };
  console.log(fav);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('http://api.nbp.pl/api/exchangerates/tables/A/').then((response) =>
      response
        .json()
        .then((res) => setCurrencies(res[0].rates))
        .catch(() => setError(true)),
    );
  }, []);

  return (
    <div className={styles.wrapper}>
      <CurrencyList currencies={currencies} error={error} handleAdd={handleAdd} />
      <FavoritesList fav={fav} />
    </div>
  );
};

export default Fetch;
