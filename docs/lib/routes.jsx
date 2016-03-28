import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Home from './Home';
import LayoutPage from './Components/LayoutPage';
import NavsPage from './Components/NavsPage';
import NavbarPage from './Components/NavbarPage';
import ButtonsPage from './Components/ButtonsPage';
import ButtonGroupPage from './Components/ButtonGroupPage';
import ButtonDropdownPage from './Components/ButtonDropdownPage';
import DropdownsPage from './Components/DropdownsPage';
import PopoversPage from './Components/PopoversPage';
import TooltipsPage from './Components/TooltipsPage';
import LabelsPage from './Components/LabelsPage';
import ModalsPage from './Components/ModalsPage';
import NotFound from './NotFound';
import Components from './Components';
import UI from './UI';

const routes = (
  <Route path="/" component={ UI.Layout }>
    <IndexRoute component={ Home } />
    <Route path="/components/" component={Components}>
      <IndexRedirect to="buttons/" />
      <Route path="buttons/" component={ ButtonsPage } />
      <Route path="button-group/" component={ ButtonGroupPage } />
      <Route path="button-dropdown/" component={ ButtonDropdownPage } />
      <Route path="dropdowns/" component={ DropdownsPage } />
      <Route path="popovers/" component={ PopoversPage } />
      <Route path="tooltips/" component={ TooltipsPage } />
      <Route path="labels/" component={ LabelsPage } />
      <Route path="modals/" component={ ModalsPage } />
      <Route path="layout/" component={ LayoutPage } />
      <Route path="navs/" component={ NavsPage } />
      <Route path="navbar/" component={ NavbarPage } />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
