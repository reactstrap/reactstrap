import React from 'react';
import { Redirect } from 'react-router';


const Page = () => {
  return (
    <Route
      exact
      path="/utilities/"
      render={() => <Redirect to="/utilities/clearfix/"/>}
    />
  );
};

export default Page;
