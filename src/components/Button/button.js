import React from 'react';

import styles from './button.module.scss';

const Button = ({ children }) => (
  <button className={styles.button} type="button">
    {children}
  </button>
);

export default Button;
