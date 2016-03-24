import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './Home';
import ButtonsPage from './Components/ButtonsPage';
import NotFound from './NotFound';
import Components from './Components';

const routes = (
  <Route path="/">
    <IndexRoute component={ Home } />
    <Route path="/components" component={Components}>
      <IndexRoute component={ ButtonsPage } />
      <Route path="buttons" component={ ButtonsPage } />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
