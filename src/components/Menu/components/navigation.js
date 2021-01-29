import React, { useState } from 'react';

import MenuLink from './menuLink';
import HamburgerButton from './hamburger';
import styles from './navigation.module.scss';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleOpenMenu = () => {
    setShowNav(!showNav);
    setIsOpen(isOpen);
  };

  return (
    <nav>
      {showNav ? (
        <>
          <div className={styles.wrapperOpen}>
            <MenuLink closeMenu={handleOpenMenu} />
          </div>
          <button type="button" className={styles.hamburger} onClick={handleOpenMenu}>
            <HamburgerButton color="green" />
          </button>
        </>
      ) : (
        <>
          <div className={styles.wrapperClose}>
            <MenuLink closeMenu={handleOpenMenu} />
          </div>
          <button type="button" className={styles.hamburger} onClick={handleOpenMenu}>
            <HamburgerButton color="red" />
          </button>
        </>
      )}
    </nav>
  );
};

export default Navigation;
