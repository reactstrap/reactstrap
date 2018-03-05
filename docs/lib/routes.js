import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Home from './Home';

import AlertsPage from './Components/AlertsPage';

import ClearfixPage from './Utilities/ClearfixPage';
import ColorsPage from './Utilities/ColorsPage';
import NotFound from './NotFound';
import Components from './Components';
import Utilities from './Utilities';
import UI from './UI';

const routes = (
  <Route path="/" component={UI.Layout}>
    <IndexRoute component={Home} />
    <Route path="/components/" component={Components}>
      <IndexRedirect to="alerts/" />
      {/* <Route path="breadcrumbs/" component={BreadcrumbsPage} /> */}
    </Route>
    <Route path="/utilities/" component={Utilities}>
      <IndexRedirect to="colors/" />
      <Route path="colors/" component={ColorsPage} />
      <Route path="clearfix/" component={ClearfixPage} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
