import PropTypes from 'prop-types';
import { getTarget, DOMElement } from './utils';

const PopperTargetHelper = (props, context) => {
  context.popperManager.setTargetNode(getTarget(props.target));
  return null;
};

PopperTargetHelper.contextTypes = {
  popperManager: PropTypes.object.isRequired,
};

PopperTargetHelper.propTypes = {
  target: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]).isRequired,
};

export default PopperTargetHelper;
