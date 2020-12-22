import React from 'react';

const Currency = ({ currency, code, mid }) => {
  return (
    <div>
      <p>
        {currency} {code} {mid}
      </p>
    </div>
  );
};

export default Currency;
