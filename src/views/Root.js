import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from 'theme/GlobalStyle';
import store from '../redux/store';

import Currencies from '../components/Currencies/currencies';

const Root = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Currencies />
    </Provider>
  );
};

export default Root;
