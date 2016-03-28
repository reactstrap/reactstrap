import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.string
};

const defaultProps = {};

class Fade extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeIn: false
    };

    this.fade = this.fade.bind(this);
    this.fadeIn = this.fadeIn.bind(this);
    this.fadeOut = this.fadeOut.bind(this);
  }

  fade(fade, cb, delay) {
    this.setState({
      fadeIn: fade
    });

    if (cb) {
      setTimeout(cb, delay);
    }
  }

  fadeIn(cb, delay) {
    this.fade(true, cb, delay);
  }

  fadeOut(cb, delay) {
    this.fade(false, cb, delay);
  }

  render() {
    const classes = classNames(
      this.props.className,
      'fade',
      {
        in: this.state.fadeIn
      }
    );

    return (
      <div {...this.props} className={classes} />
    );
  }
}

Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;

export default Fade;
