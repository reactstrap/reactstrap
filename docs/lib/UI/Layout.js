import React from 'react';
import Helmet from 'react-helmet';
import Footer from './Footer';
import Nav from './Nav';

export default (props) => {
  return (
    <div className="wrapper">
      <Helmet
        titleTemplate="reactstrap - %s"
        title="React Bootstrap 4 components"
        defaultTitle="React Bootstrap 4 components"
        meta={[
            { 'name': 'description', 'content': 'reactstrap - easy to use React Bootstrap 4 components compatible with React 16+' },
            { 'property': 'og:type', 'content': 'article' }
        ]}
      />
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
};
