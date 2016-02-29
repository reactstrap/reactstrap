# reactstrap [![Build Status](https://travis-ci.org/eddywashere/reactstrap.svg?branch=master)](https://travis-ci.org/eddywashere/reactstrap) [![Test Coverage](https://codeclimate.com/github/eddywashere/reactstrap/badges/coverage.svg)](https://codeclimate.com/github/eddywashere/reactstrap/coverage)

A work in progress react component library for Bootstrap 4. Don't use this just yet.

#### Project Goals

- Provide a simple interface for integrating bootstrap components
- When appropriate, extend/reuse standard DOM attributes like `disabled`, `type`, `title`
- Don't require dependency on jQuery or Bootstrap's JavaScript

## Installation

Add `reactstrap` as a dependency via npm:

```sh
npm install reactstrap --save
```

Import the components you need, example:

```js
import { Button } from 'lib/index';
```

## Documentation

Until a documentation site exists, checkout this [jsbin live demo](http://jsbin.com/dimive/latest/edit?js,output) or the example sections for usage: https://github.com/eddywashere/reactstrap/tree/master/example/js

Currently this library contains basic support for the following components:

- Buttons
- Button Dropdowns
- Button Groups
- Button Tools
- Dropdowns
- Tooltips

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
