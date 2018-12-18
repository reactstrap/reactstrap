import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Arrow, Popper as ReactPopper } from 'react-popper';
import { getTarget, targetPropType, mapToCssModules, DOMElement } from './utils';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  placement: PropTypes.string,
  placementPrefix: PropTypes.string,
  arrowClassName: PropTypes.string,
  hideArrow: PropTypes.bool,
  tag: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  cssModule: PropTypes.object,
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fallbackPlacement: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  flip: PropTypes.bool,
  container: targetPropType,
  target: targetPropType.isRequired,
  modifiers: PropTypes.object,
  boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
};

const defaultProps = {
  boundariesElement: 'scrollParent',
  placement: 'auto',
  hideArrow: false,
  isOpen: false,
  offset: 0,
  fallbackPlacement: 'flip',
  flip: true,
  container: 'body',
  modifiers: {},
};

const childContextTypes = {
  popperManager: PropTypes.object.isRequired,
};

class PopperContent extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlacementChange = this.handlePlacementChange.bind(this);
    this.setTargetNode = this.setTargetNode.bind(this);
    this.getTargetNode = this.getTargetNode.bind(this);
    this.getRef = this.getRef.bind(this);
    this.state = {};
  }

  getChildContext() {
    return {
      popperManager: {
        setTargetNode: this.setTargetNode,
        getTargetNode: this.getTargetNode,
      },
    };
  }

  componentDidUpdate() {
    if (this._element && this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
      this._element.childNodes[0].focus();
    }
  }

  setTargetNode(node) {
    this.targetNode = node;
  }

  getTargetNode() {
    return this.targetNode;
  }

  getContainerNode() {
    return getTarget(this.props.container);
  }

  getRef(ref) {
    this._element = ref;
  }

  handlePlacementChange(data) {
    if (this.state.placement !== data.placement) {
      this.setState({ placement: data.placement });
    }
    return data;
  }

  renderChildren() {
    const {
      cssModule,
      children,
      isOpen,
      flip,
      target,
      offset,
      fallbackPlacement,
      placementPrefix,
      arrowClassName: _arrowClassName,
      hideArrow,
      className,
      tag,
      container,
      modifiers,
      boundariesElement,
      ...attrs
    } = this.props;
    const arrowClassName = mapToCssModules(classNames(
      'arrow',
      _arrowClassName
    ), cssModule);
    const placement = (this.state.placement || attrs.placement).split('-')[0];
    const popperClassName = mapToCssModules(classNames(
      className,
      placementPrefix ? `${placementPrefix}-${placement}` : placement
    ), this.props.cssModule);

    const extendedModifiers = {
      offset: { offset },
      flip: { enabled: flip, behavior: fallbackPlacement },
      preventOverflow: { boundariesElement },
      update: {
        enabled: true,
        order: 950,
        fn: this.handlePlacementChange,
      },
      ...modifiers,
    };

    return (
      <ReactPopper modifiers={extendedModifiers} {...attrs} component={tag} className={popperClassName} x-placement={this.state.placement || attrs.placement}>
        {children}
        {!hideArrow && <Arrow className={arrowClassName} />}
      </ReactPopper>
    );
  }

  render() {
    this.setTargetNode(getTarget(this.props.target));

    if (this.props.isOpen) {
      return this.props.container === 'inline' ?
        this.renderChildren() :
        ReactDOM.createPortal((<div ref={this.getRef}>{this.renderChildren()}</div>), this.getContainerNode());
    }

    return null;
  }
}

PopperContent.propTypes = propTypes;
PopperContent.defaultProps = defaultProps;
PopperContent.childContextTypes = childContextTypes;

export default PopperContent;
