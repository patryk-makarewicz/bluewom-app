import React from 'react';
import styled from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';

const MyHeader = styled.header`
  font-size: calc(16px + 2vmin);
  font-weight: 700;
`;

const Root = () => (
  <div>
    <GlobalStyle />
    <MyHeader>Add to favorite</MyHeader>
  </div>
);

export default Root;
