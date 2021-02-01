import React from 'react';
import { NavLink } from 'react-router-dom';

import EuroIcon from '@material-ui/icons/Euro';
import styles from './frame.module.scss';

const Frame = (props) => {
  const { text, label, to } = props;

  return (
    <div className={styles.wrapper}>
      <EuroIcon style={{ fontSize: 200 }} color="primary" />
      <header className={styles.frame}>
        <h1 className={styles.frame__title}>CURRENCY APP</h1>
        <p className={styles.frame__paragraph}>{text}</p>
        <NavLink className={styles.frame__link} to={to}>
          {label}
        </NavLink>
      </header>
    </div>
  );
};

export default Frame;
