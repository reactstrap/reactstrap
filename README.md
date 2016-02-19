# reactstrap [![Build Status](https://travis-ci.org/eddywashere/reactstrap.svg?branch=master)](https://travis-ci.org/eddywashere/reactstrap)

A work in progress react component library for Bootstrap 4. Don't use this just yet.

## Installation

Add `reactstrap` as a dependency via npm:

```sh
npm install reactstrap --save
```

Import the components you need, example:

```js
import { Button } from 'lib/index';
```

### Buttons

Basic Button Styles

```js
import React from 'react';
import { Button } from 'lib/index';

const Example = (props) => {
  return (
    <div>
      <Button color="primary">primary</Button>
      <Button color="secondary">secondary</Button>
      <Button color="success">success</Button>
      <Button color="info">info</Button>
      <Button color="warning">warning</Button>
      <Button color="danger">danger</Button>
      <Button color="link">link</Button>
    </div>
  );
};
```

Support for using custom components

```jsx
import React from 'react';
import { Link } from 'react-router'
import { Button } from 'lib/index';

const Example = (props) => {
  return (
    <div>
      <Button el={Link} to="/home" color="link">Home Link</Button>
    </div>
  );
};
```

### more coming soon

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
