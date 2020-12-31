import React from 'react';

import Currency from './Currency';

import styles from './CurrencyList.module.scss';

const CurrencyList = ({ currencies, error, handleAdd }) => {
  // const addToFav = (e) => handleAdd(e.target.id);
  // const [fav, setFav] = useState([]);

  // const handleAdd = (e) => {
  //   setFav(e.target.id);
  // };

  // console.log(fav);
  // const clearList = () => {
  //   setFav([]);
  // };

  return (
    <>
      <div className={styles.wrapper}>
        <h1>Chose Your favorite currencies</h1>
        {currencies ? (
          <div>
            {currencies.map((data) => (
              <>
                <Currency
                  key={data.code}
                  id={data.code}
                  code={data.code}
                  currency={data.currency}
                  mid={data.mid}
                  handleAdd={handleAdd}
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
      {/* <div>
        <p>FavList</p>
        <div>
          <>
            {fav.map((favItem) => (
              <div key={favItem}>{favItem}</div>
            ))}
          </>
          <button type="button" onClick={clearList}>
            Clear
          </button>
        </div>
      </div> */}
    </>
  );
};

export default CurrencyList;
