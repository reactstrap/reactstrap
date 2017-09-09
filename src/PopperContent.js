import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Arrow, Manager, Popper as ReactPopper } from 'react-popper';
import PopperTargetHelper from './PopperTargetHelper';
import { DOMElement, mapToCssModules } from './utils';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  placement: PropTypes.string,
  placementPrefix: PropTypes.string,
  tag: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  cssModule: PropTypes.object,
  wrapTag: PropTypes.string,
  wrapClassName: PropTypes.string,
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fallbackPlacement: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  flip: PropTypes.bool,
  target: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]).isRequired,
};

const defaultProps = {
  placement: 'auto',
  isOpen: false,
  offset: 0,
  fallbackPlacement: 'flip',
  wrapTag: 'span',
  flip: true,
};

class PopperContent extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlacementChange = this.handlePlacementChange.bind(this);
    this.state = {};
  }

  handlePlacementChange(data) {
    if (this.state.placement !== data.placement) {
      this.setState({ placement: data.placement });
    }
    return data;
  }

  render() {
    const {
      cssModule,
      children,
      isOpen,
      flip,
      target,
      offset,
      fallbackPlacement,
      placementPrefix,
      className,
      wrapTag,
      wrapClassName,
      tag,
      ...attrs } = this.props;
    const arrowClassName = mapToCssModules('arrow', cssModule);
    const placement = (this.state.placement || attrs.placement).split('-')[0];
    const managerClass = mapToCssModules(wrapClassName, this.props.cssModule);
    const popperClassName = mapToCssModules(classNames(
      className,
      placementPrefix ? `${placementPrefix}-${placement}` : placement
    ), this.props.cssModule);

    const modifiers = {
      offset: { offset },
      flip: { enabled: flip, behavior: fallbackPlacement },
      update: {
        enabled: true,
        order: 950,
        fn: this.handlePlacementChange,
      },
    };

    return (
      <Manager tag={wrapTag} className={managerClass}>
        <PopperTargetHelper target={target} />
        {isOpen && <ReactPopper modifiers={modifiers} {...attrs} component={tag} className={popperClassName}>
          {children}
          <Arrow className={arrowClassName} />
        </ReactPopper>}
      </Manager>
    );
  }
}

PopperContent.propTypes = propTypes;
PopperContent.defaultProps = defaultProps;

export default PopperContent;
