import React from 'react';

import EuroIcon from '@material-ui/icons/Euro';
import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.logo}>
      <p className={styles.logo__title}>
        <EuroIcon style={{ fontSize: 16.5, color: '#939597', marginTop: '2px' }} />
        URRENCY APP
      </p>
      <p>
        create by
        <a
          className={styles.logo__link}
          href="https://patryk-makarewicz.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp;Patryk Makarewicz
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
