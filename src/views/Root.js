import React from 'react';
import styled from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import CurrencyList from 'components/CurrencyList';

const MyHeader = styled.header`
  font-size: calc(16px + 2vmin);
  font-weight: 700;
`;

const Root = () => (
  <div>
    <GlobalStyle />
    <MyHeader>List of Your favorite currencies</MyHeader>
    <CurrencyList />
  </div>
);

export default Root;
