import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './button.module.scss';

const Button = (props) => {
  const { to, children } = props;

  return (
    <NavLink className={styles.button} to={to}>
      {children}
    </NavLink>
  );
};

export default Button;
