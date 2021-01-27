import React from 'react';
import { Provider } from 'react-redux';
import GlobalStyle from 'theme/GlobalStyle';
import store from '../redux/store';

import Currencies from '../components/Currencies/currencies';
import Favorites from '../components/Favorites/favorites';

const Root = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Currencies />
      <Favorites />
    </Provider>
  );
};

export default Root;
