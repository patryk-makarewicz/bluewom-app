import React from 'react';

import styled from 'styled-components';
import Frame from '../../components/Frame/frame';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  padding: 10px;
`;

const StartView = () => (
  <Wrapper>
    <Frame
      text="This is an app for checking the value of your favorite currencies from Bank NBP."
      label=" GET STARTED"
      to="/currencies"
    />
  </Wrapper>
);

export default StartView;
