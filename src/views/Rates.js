import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Rates = ({ rates }) => (
  <table>
    <thead>
      <tr>
        <th>Currency</th>
        <th>Code</th>
        <th>Mid</th>
      </tr>
    </thead>
    <tbody>
      {rates.map(({ currency, code, mid }) => (
        <tr>
          <td>{currency}</td>
          <td>{code}</td>
          <td>{mid}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

Rates.propTypes = {
  rates: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    mid: PropTypes.number.isRequired,
  }),
};

Rates.defaultProps = {
  rates: [],
};

const mapStateToProps = (state) => {
  const { rates } = state;
  return { rates };
};

export default connect(mapStateToProps)(Rates);
