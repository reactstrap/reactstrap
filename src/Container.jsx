import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  fluid: PropTypes.bool
};

const defaultProps = {};

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      className,
      fluid,
      ...attributes
    } = this.props;

    const classes = classNames(
      className,
      fluid ? 'container-fluid' : 'container'
    );

    return (
      <div {...attributes} className={classes}/>
    );
  }
}

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

export default Container;
