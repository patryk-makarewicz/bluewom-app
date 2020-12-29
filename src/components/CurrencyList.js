import React, { useState, useEffect } from 'react';

import Currency from './Currency';

const CurrencyList = () => {
  const [fav, setFav] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [error, setError] = useState(false);

  const addEntry = (e) => {
    setFav([...fav, e.target.id]);
  };

  const removeEntry = (e) => {
    setFav(...fav, fav - e.target.id);
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
    <>
      <div>
        {currencies ? (
          <div>
            {currencies.map((data) => (
              <>
                <Currency
                  key={data.code}
                  id={data.code}
                  currency={data.currency}
                  code={data.code}
                  mid={data.mid}
                  addEntry={addEntry}
                />
              </>
            ))}
          </div>
        ) : (
          <div>
            <p>Upps... We have some problem, please try again.</p>
            <p>{error}</p>
          </div>
        )}
      </div>
      <div>
        <p>FavList</p>
        <div>
          <>
            {fav.map((favItem) => (
              <div>
                <div key={favItem} id={favItem}>
                  {favItem}
                </div>
                <button type="button" id={favItem} onClick={removeEntry}>
                  -
                </button>
              </div>
            ))}
          </>
        </div>
      </div>
    </>
  );
};

export default CurrencyList;
