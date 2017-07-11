import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import _ from 'lodash';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HomeHeader from '../components/HomeHeader';
import Content from '../components/Content';
import { Switch, Redirect, Route } from 'react-router';

import 'typeface-lato';
import 'bootstrap/dist/css/bootstrap.css'; // alpha-6
// import '../css/bootstrap.min.css'; // beta
import '../css/docs.css';

class Layout extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.resizeHandler = _.debounce(this.resizeHandler.bind(this), 200, {
      leading: false,
      trailing: true
    });
  }
  resizeHandler() {
    // single place to handle resize events
    window.requestAnimationFrame(() => {
      // resize iframe examples
      const frames = document.getElementsByTagName('iframe');
      if (frames.length > 0) {
        [...frames].forEach(frame => {
          if (frame.getAttribute('data-loaded')) {
            const content = frame.contentWindow.document.body.getElementsByTagName(
              'div'
            )[0];
            frame.style.height = content.scrollHeight + 'px';
          }
        });
      }
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
  }
  render() {
    const { location, children } = this.props;
    // park of super hacky remark-example plugin
    // this helps create isolated components for doc examples
    if (location.pathname.includes('/examples/')) {
      return (
        <div>
          {children()}
        </div>
      );
    }

    const content = children();
    return (
      <div>
        <Navigation />
        <Route exact path="/" component={HomeHeader} />
        <Switch>
          <Route
            exact
            path="/components/"
            render={() => <Redirect to="/components/alerts/" />}
          />
          <Route
            exact
            path="/utilities/"
            render={() => <Redirect to="/utilities/clearfix/" />}
          />
          <Route path="/" render={() => content} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  route: PropTypes.object
};

export default Layout;
