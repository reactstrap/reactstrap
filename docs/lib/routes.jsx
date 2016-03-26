import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Home from './Home';
import ButtonsPage from './Components/ButtonsPage';
import ButtonGroupPage from './Components/ButtonGroupPage';
import ButtonDropdownPage from './Components/ButtonDropdownPage';
import PopoversPage from './Components/PopoversPage';
import TooltipsPage from './Components/TooltipsPage';
import LabelsPage from './Components/LabelsPage';
import ModalsPage from './Components/ModalsPage';
import NotFound from './NotFound';
import Components from './Components';

const routes = (
  <Route path="/">
    <IndexRoute component={ Home } />
    <Route path="/components" component={Components}>
      <IndexRedirect to="buttons" />
      <Route path="buttons" component={ ButtonsPage } />
      <Route path="button-group" component={ ButtonGroupPage } />
      <Route path="button-dropdown" component={ ButtonDropdownPage } />
      <Route path="popovers" component={ PopoversPage } />
      <Route path="tooltips" component={ TooltipsPage } />
      <Route path="labels" component={ LabelsPage } />
      <Route path="modals" component={ ModalsPage } />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
