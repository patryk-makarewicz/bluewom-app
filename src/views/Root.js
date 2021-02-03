import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyle from 'theme/GlobalStyle';
import store from '../redux/store';

import ScrollToTop from '../components/ScrollToTop/scrollToTop';
import Menu from '../components/Menu/menu';
import Footer from '../components/Footer/footer';
import StartView from './StartView/StartView';
import CurrenciesView from './CurrenciesView/CurrenciesView';
import FavoritesView from './FavoritesView/FavoritesView';

const persistor = persistStore(store);

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <Router>
          <ScrollToTop />
          <Menu />
          <Switch>
            <Route exact path="/">
              <StartView />
            </Route>
          </Switch>

          <Switch>
            <Route path="/currencies">
              <CurrenciesView />
            </Route>
          </Switch>

          <Switch>
            <Route path="/favorites">
              <FavoritesView />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default Root;
