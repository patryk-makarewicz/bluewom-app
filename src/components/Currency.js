import React from 'react';

const Currency = ({ currency, code, mid, addEntry }) => {
  return (
    <div>
      <div>{currency}</div>
      <button type="button" id={[currency, code, mid]} onClick={addEntry}>
        +
      </button>
    </div>
  );
};

export default Currency;
