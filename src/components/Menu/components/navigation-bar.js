/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import MenuLink from './menuLink';
import './navigation-bar.scss';

const NavigationBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleOpenMenu = () => {
    setShowNav(!showNav);
    setOpen(isOpen);
  };

  const styles = {
    bar1: {
      transform: showNav && 'rotate(-45deg) translate(-6px, 8px)',
    },
    bar2: {
      opacity: showNav && 0,
    },
    bar3: {
      transform: showNav && 'rotate(45deg) translate(-5px, -7px)',
    },
  };

  return (
    <nav>
      {showNav ? (
        <>
          <div className="wrapperOpen">
            <MenuLink closeMenu={handleOpenMenu} />
          </div>
          <div className="hamburger" onClick={handleOpenMenu}>
            <div className="hamburger__bar hamburger__bar--color" style={styles.bar1} />
            <div className="hamburger__bar hamburger__bar--color" style={styles.bar2} />
            <div className="hamburger__bar hamburger__bar--color" style={styles.bar3} />
          </div>
        </>
      ) : (
        <>
          <div className="wrapperClose">
            <MenuLink closeMenu={handleOpenMenu} />
          </div>
          <div className="hamburger" onClick={handleOpenMenu}>
            <div className="hamburger__bar" style={styles.bar1} />
            <div className="hamburger__bar" style={styles.bar2} />
            <div className="hamburger__bar" style={styles.bar3} />
          </div>
        </>
      )}
    </nav>
  );
};

export default NavigationBar;
