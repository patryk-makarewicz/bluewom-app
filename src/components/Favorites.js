import React from 'react';

const Currency = ({ code, mid, handleAdd }) => {
  return (
    <div>
      <div>{code}</div>
      <div>{mid}</div>
      <button type="button" onClick={handleAdd}>
        +
      </button>
    </div>
  );
};

export default Currency;
