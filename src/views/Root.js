import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from 'theme/GlobalStyle';
import store from '../redux/store';

import Menu from '../components/Menu/menu';
import StartView from './StartView';
import Currencies from '../components/Currencies/currencies';
import Favorites from '../components/Favorites/favorites';

const Root = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <StartView />
          </Route>
        </Switch>
        <Switch>
          <Route path="/currencies">
            <Currencies />
          </Route>
        </Switch>
        <Switch>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default Root;
