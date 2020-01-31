import PropTypes from 'prop-types';

// https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L436-L443
export function getScrollbarWidth() {
  let scrollDiv = document.createElement('div');
  // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}

export function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? `${padding}px` : null;
}

export function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}

export function getOriginalBodyPadding() {
  const style = window.getComputedStyle(document.body, null);

  return parseInt((style && style.getPropertyValue('padding-right')) || 0, 10);
}

export function conditionallyUpdateScrollbar() {
  const scrollbarWidth = getScrollbarWidth();
  // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433
  const fixedContent = document.querySelectorAll(
    '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'
  )[0];
  const bodyPadding = fixedContent
    ? parseInt(fixedContent.style.paddingRight || 0, 10)
    : 0;

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}

let globalCssModule;

export function setGlobalCssModule(cssModule) {
  globalCssModule = cssModule;
}

export function mapToCssModules(className = '', cssModule = globalCssModule) {
  if (!cssModule) return className;
  return className
    .split(' ')
    .map(c => cssModule[c] || c)
    .join(' ');
}

/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */
export function omit(obj, omitKeys) {
  const result = {};
  Object.keys(obj).forEach(key => {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}

/**
 * Returns a filtered copy of an object with only the specified keys.
 */
export function pick(obj, keys) {
  const pickKeys = Array.isArray(keys) ? keys : [keys];
  let length = pickKeys.length;
  let key;
  const result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }
  return result;
}

let warned = {};

export function warnOnce(message) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined') {
      console.error(message); // eslint-disable-line no-console
    }
    warned[message] = true;
  }
}

export function deprecated(propType, explanation) {
  return function validate(props, propName, componentName, ...rest) {
    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
      warnOnce(
        `"${propName}" property of "${componentName}" has been deprecated.\n${explanation}`
      );
    }

    return propType(props, propName, componentName, ...rest);
  };
}

// Shim Element if needed (e.g. in Node environment)
const Element = (typeof window === 'object' && window.Element) || function() {};

export function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error(
      'Invalid prop `' +
        propName +
        '` supplied to `' +
        componentName +
        '`. Expected prop to be an instance of Element. Validation failed.'
    );
  }
}

export const targetPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.func,
  DOMElement,
  PropTypes.shape({ current: PropTypes.any }),
]);

export const tagPropType = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.string,
  PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
  PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
  ]))
]);

/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
// These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss
export const TransitionTimeouts = {
  Fade:     150, // $transition-fade
  Collapse: 350, // $transition-collapse
  Modal:    300, // $modal-transition
  Carousel: 600, // $carousel-transition
};

// Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.
export const TransitionPropTypeKeys = [
  'in',
  'mountOnEnter',
  'unmountOnExit',
  'appear',
  'enter',
  'exit',
  'timeout',
  'onEnter',
  'onEntering',
  'onEntered',
  'onExit',
  'onExiting',
  'onExited',
];

export const TransitionStatuses = {
  ENTERING: 'entering',
  ENTERED:  'entered',
  EXITING:  'exiting',
  EXITED:   'exited',
};

export const keyCodes = {
  esc:   27,
  space: 32,
  enter: 13,
  tab:   9,
  up:    38,
  down:  40,
  home:  36,
  end:   35,
  n:     78,
  p:     80,
};

export const PopperPlacements = [
  'auto-start',
  'auto',
  'auto-end',
  'top-start',
  'top',
  'top-end',
  'right-start',
  'right',
  'right-end',
  'bottom-end',
  'bottom',
  'bottom-start',
  'left-end',
  'left',
  'left-start',
];

export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export function isReactRefObj(target) {
  if (target && typeof target === 'object') {
    return 'current' in target;
  }
  return false;
}

function getTag(value) {
  if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]'
    }
    return Object.prototype.toString.call(value)
}

export function toNumber(value) {
  const type = typeof value;
  const NAN = 0 / 0;
  if (type === 'number') {
    return value
  }
  if (type === 'symbol' || (type === 'object' && getTag(value) === '[object Symbol]')) {
    return NAN
  }
  if (isObject(value)) {
    const other = typeof value.valueOf === 'function' ? value.valueOf() : value;
    value = isObject(other) ? `${other}` : other
  }
  if (type !== 'string') {
    return value === 0 ? value : +value
  }
  value = value.replace(/^\s+|\s+$/g, '');
  const isBinary = /^0b[01]+$/i.test(value);
  return (isBinary || /^0o[0-7]+$/i.test(value))
    ? parseInt(value.slice(2), isBinary ? 2 : 8)
    : (/^[-+]0x[0-9a-f]+$/i.test(value) ? NAN : +value)
}

export function isObject(value) {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function')
}

export function isFunction(value) {
  if (!isObject(value)) {
    return false
  }

  const tag = getTag(value);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' ||
    tag === '[object GeneratorFunction]' || tag === '[object Proxy]'
}

export function findDOMElements(target) {
  if (isReactRefObj(target)) {
    return target.current;
  }
  if (isFunction(target)) {
    return target();
  }
  if (typeof target === 'string' && canUseDOM) {
    let selection = document.querySelectorAll(target);
    if (!selection.length) {
      selection = document.querySelectorAll(`#${target}`);
    }
    if (!selection.length) {
      throw new Error(
        `The target '${target}' could not be identified in the dom, tip: check spelling`
      );
    }
    return selection;
  }
  return target;
}

export function isArrayOrNodeList(els) {
  if (els === null) {
    return false;
  }
  return Array.isArray(els) || (canUseDOM && typeof els.length === 'number');
}

export function getTarget(target, allElements) {
  const els = findDOMElements(target);
  if (allElements) {
    if (isArrayOrNodeList(els)) {
      return els;
    }
    if (els === null) {
      return [];
    }
    return [els];
  } else {
    if (isArrayOrNodeList(els)) {
      return els[0];
    }
    return els;
  }
}

export const defaultToggleEvents = ['touchstart', 'click'];

export function addMultipleEventListeners(_els, handler, _events, useCapture) {
  let els = _els;
  if (!isArrayOrNodeList(els)) {
    els = [els];
  }

  let events = _events;
  if (typeof events === 'string') {
    events = events.split(/\s+/);
  }

  if (
    !isArrayOrNodeList(els) ||
    typeof handler !== 'function' ||
    !Array.isArray(events)
  ) {
    throw new Error(`
      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.
      The second must be a function.
      The third is a string or an array of strings that represents DOM events
    `);
  }

  Array.prototype.forEach.call(events, event => {
    Array.prototype.forEach.call(els, el => {
      el.addEventListener(event, handler, useCapture);
    });
  });
  return function removeEvents() {
    Array.prototype.forEach.call(events, event => {
      Array.prototype.forEach.call(els, el => {
        el.removeEventListener(event, handler, useCapture);
      });
    });
  };
}

export const focusableElements = [
  'a[href]',
  'area[href]',
  'input:not([disabled]):not([type=hidden])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  'object',
  'embed',
  '[tabindex]:not(.modal)',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
];
