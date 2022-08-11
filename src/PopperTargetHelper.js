import PropTypes from 'prop-types';
import { getTarget, targetPropType } from './utils';

function PopperTargetHelper(props, context) {
  context.popperManager.setTargetNode(getTarget(props.target));
  return null;
}

PopperTargetHelper.contextTypes = {
  popperManager: PropTypes.object.isRequired,
};

PopperTargetHelper.propTypes = {
  target: targetPropType.isRequired,
};

export default PopperTargetHelper;
