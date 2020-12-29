import React from 'react';

const Currency = ({ currency, code, mid }) => {
  return (
    <div>
      {currency} {code} {mid}
    </div>
  );
};

export default Currency;
