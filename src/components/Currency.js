import React from 'react';

const Currency = ({ currency, code, mid, handleAdd }) => {
  return (
    <div>
      <div>{code}</div>
      <div>{currency}</div>
      <div>{mid}</div>
      <button type="button" id={code} onClick={handleAdd}>
        +
      </button>
    </div>
  );
};

export default Currency;
