[![reactstrap](https://cloud.githubusercontent.com/assets/399776/13906899/1de62f0c-ee9f-11e5-95c0-c515fee8e918.png)](https://reactstrap.github.io)

[![Build Status](https://travis-ci.org/reactstrap/reactstrap.svg?branch=master)](https://travis-ci.org/reactstrap/reactstrap) [![Coverage Status](https://coveralls.io/repos/github/reactstrap/reactstrap/badge.svg?branch=master)](https://coveralls.io/github/reactstrap/reactstrap?branch=master)

# reactstrap

Easy to use React Bootstrap 4 components compatible with React 0.14.x and 15.x.


## Installation

Install `reactstrap` and peer dependencies via NPM

```sh
npm install --save reactstrap react-addons-transition-group react react-dom
```

Import the components you need, example:

```js
import { Button, Popover, Tooltip } from 'reactstrap';
```

## About the Project

This library contains React Bootstrap 4 components that favor composition and control. The library does not depend on jQuery or Bootstrap javascript. However, [Tether](http://tether.io/) is relied upon for advanced positioning of content like Tooltips, Popovers, and auto-flipping Dropdowns.

There are a few core concepts to understand in order to make the most out of this library.

1. Your content is expected to be composed via props.children rather than using named props to pass in Components.

    ```js
    // Content passed in via props
    const Example = (props) => {
      return (
        <p>This is a tooltip <TooltipTrigger tooltip={TooltipContent}>example</TooltipTrigger>!</p>
      );
    }

    // Content passed in as children (Preferred)
    const PreferredExample = (props) => {
      return (
        <p>
          This is a <a href="#" id="TooltipExample">tooltip</a> example.
          <Tooltip target="TooltipExample">
            <TooltipContent/>
          </Tooltip>
        </p>
      );
    }
    ```

2. Attributes in this library are used to pass in state, conveniently apply modifier classes, enable advanced functionality (like tether), or automatically include non-content based elements.

    Examples:

    - `isOpen` - current state for items like dropdown, popover, tooltip
    - `toggle` - callback for toggling `isOpen` in the controlling component
    - `color` - applies color classes, ex: `<Button color="danger"/>`
    - `size` - for controlling size classes. ex: `<Button size="sm"/>`
    - `tag` - customize component output by passing in an element name or Component
    - boolean based props (attributes) when possible for alternative style classes or `sr-only` content


## Documentation

https://reactstrap.github.io

This library contains the following components:

 - [Button](https://reactstrap.github.io/components/buttons/)
 - [ButtonDropdown](https://reactstrap.github.io/components/button-dropdown/)
 - [ButtonGroup](https://reactstrap.github.io/components/button-group/)
 - [ButtonToolbar](https://reactstrap.github.io/components/button-group/)
 - [Dropdown](https://reactstrap.github.io/components/dropdowns/)
 - [Labels](https://reactstrap.github.io/components/labels/)
 - [Card](https://reactstrap.github.io/components/card/)
 - [Popover](https://reactstrap.github.io/components/popovers/)
 - [Modal](https://reactstrap.github.io/components/modals/)
 - [Tooltip](https://reactstrap.github.io/components/tooltips/)
 - [Layout (Container, Row, Col)](https://reactstrap.github.io/components/layout/)
 - [Nav](https://reactstrap.github.io/components/navs/)
 - [Navbar](https://reactstrap.github.io/components/navbar/)
 - [Layout](https://reactstrap.github.io/components/layout/)
 - [Tables](https://reactstrap.github.io/components/tables/)

## Development

Install dependencies:

```sh
npm install
```

Run examples at [http://localhost:8080/](http://localhost:8080/) with webpack dev server:

```sh
npm start
```

Run tests & coverage report:

```sh
npm test
```

Watch tests:

```sh
npm run test-watch
```
