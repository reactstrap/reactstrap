---
title: Alerts
path: "/components/alerts"
section: components
draft: false
---

<example src="Alert">

### Properties

```js
Alert.propTypes = {
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  color: PropTypes.string, // default: 'success'
  isOpen: PropTypes.bool,  // default: true
  toggle: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  // Set any of the timeouts to 0 to disable animation
  transitionAppearTimeout: PropTypes.number,
  transitionEnterTimeout: PropTypes.number,
  transitionLeaveTimeout: PropTypes.number
}
```
