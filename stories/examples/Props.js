import React from 'react';
import { ArgsTable } from '@storybook/addon-docs';
import PropTypes from 'prop-types';

function Info({ component }) {
  return (
    <div>
      <h5>{component.name}</h5>
      <ArgsTable of={component} />
    </div>
  );
}

function Props({ component, components = [] }) {
  return (
    <div>
      {component ? <Info component={component} /> : undefined}
      {components.map((c) => (
        <Info component={c} />
      ))}
    </div>
  );
}

Info.propTypes = {
  component: PropTypes.node,
};

Props.propTypes = {
  component: PropTypes.node,
  components: PropTypes.arrayOf(PropTypes.node),
};

export default Props;
