import React, { useState } from 'react';

import { Fade as Hamburger } from 'hamburger-react';
import MenuLink from './menuLink';
import styles from './navigation.module.scss';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleOpenMenu = () => {
    setShowNav(!showNav);
    setOpen(isOpen);
  };

  return (
    <nav>
      {showNav ? (
        <>
          <div className={styles.wrapperOpen}>
            <MenuLink closeMenu={handleOpenMenu} />
          </div>
          <button type="button" className={styles.hamburger} onClick={handleOpenMenu}>
            <Hamburger
              toggled={!isOpen}
              toggle={setOpen}
              size={25}
              direction="left"
              duration={0.4}
              color="#1976d2"
            />
          </button>
        </>
      ) : (
        <>
          <div className={styles.wrapperClose}>
            <MenuLink closeMenu={handleOpenMenu} />
          </div>
          <button type="button" className={styles.hamburger} onClick={handleOpenMenu}>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={25}
              direction="left"
              duration={0.4}
              color="#FFFFFF"
            />
          </button>
        </>
      )}
    </nav>
  );
};

export default Navigation;
