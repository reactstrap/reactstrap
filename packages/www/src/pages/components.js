import React from 'react';
import { Redirect } from 'react-router';


const Page = () => {
  return (
    <Route
      exact
      path="/components/"
      render={() => <Redirect to="/components/alerts/"/>}
    />
  );
};

export default Page;
