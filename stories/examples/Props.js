import React from 'react';
import { ArgsTable } from '@storybook/addon-docs';

const Info = ({ component }) => (
  <div>
    <h5>{component.name}</h5>
    <ArgsTable of={component} />
  </div>
);

const Props = ({ component, components = [] }) => {
  return (
    <div>
      {component ? <Info component={component} /> : undefined}
      {components.map((component) => (
        <Info component={component} />
      ))}
    </div>
  );
};

export default Props;
