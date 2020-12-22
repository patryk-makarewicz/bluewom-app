import React, { useState, useEffect } from 'react';

// import Currency from './Currency';

const CurrencyList = () => {
  const [currencies, setCurrencies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    fetch('http://api.nbp.pl/api/exchangerates/tables/A/').then((response) =>
      response
        .json()
        .then((res) => setCurrencies(res[0].rates))
        .catch(() => setError(true)),
    );
  }, []);

  console.log(currencies);

  return (
    <>
      {currencies ? (
        <div>
          {currencies.map((data) => (
            <div key={data.code}>
              <p>
                {data.currency} {data.code} {data.mid}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>Upps... We have some problem, please try again.</p>
          <p>{error}</p>
        </div>
      )}
    </>
  );
};

export default CurrencyList;
