import React, { useState, useEffect } from 'react';

const Fetch = () => {
  const [hasError, setErrors] = useState(false);
  const [currency, setCurrency] = useState({});

  async function fetchData() {
    // eslint-disable-next-line no-undef
    const results = await fetch('http://api.nbp.pl/api/exchangerates/tables/A/');
    results
      .json()
      .then((res) => setCurrency(res))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <span>{JSON.stringify(currency)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default Fetch;
