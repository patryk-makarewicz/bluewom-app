import React from 'react';

import styled from 'styled-components';
import StartFrame from '../../components/StartFrame/startFrame';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  padding: 10px;
`;

const StartView = () => (
  <Wrapper>
    <StartFrame />
  </Wrapper>
);

export default StartView;
