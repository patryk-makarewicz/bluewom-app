import React from 'react';
import styled from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import Rates from 'views/Rates';
import { Provider } from 'react-redux';
import store from 'store';

const MyHeader = styled.header`
  font-size: calc(16px + 2vmin);
  font-weight: 700;
`;

const Root = () => (
  <Provider store={store}>
    <div>
      <GlobalStyle />
      <MyHeader>Add to favorite</MyHeader>
      <Rates />
    </div>
  </Provider>
);

export default Root;
