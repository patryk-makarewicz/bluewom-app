import React, { useState } from 'react';

import { Fade as Hamburger } from 'hamburger-react';

const HamburgerButton = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Hamburger
      toggled={isOpen}
      toggle={setOpen}
      size={25}
      direction="left"
      duration={0.4}
      color="#FFFFFF"
    />
  );
};

export default HamburgerButton;
