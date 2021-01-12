import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from 'theme/GlobalStyle';
import store from '../store';

import Currency from '../currency/Currency';

const Root = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Currency />
    </Provider>
  );
};

export default Root;
