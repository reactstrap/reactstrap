var ecmaFeatures = {
  'jsx': true,
  'arrowFunctions': true,
  'blockBindings': true,
  'defaultParams': true,
  'destructuring': true,
  'forOf': true,
  'generators': true,
  'objectLiteralComputedProperties': true,
  'objectLiteralShorthandMethods': true,
  'objectLiteralShorthandProperties': true,
  'experimentalObjectRestSpread': true,
  'restParams': true,
  'spread': true,
  'templateStrings': true,
  'modules': true,
  'classes': true
};

module.exports = {
  'plugins': [
    'react'
  ],
  // new eslint 2.0 options
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': ecmaFeatures
  },
  'ecmaFeatures': ecmaFeatures,
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
    'jasmine': true
  },
  'globals': {
    'describe': true,
    'it': true
  },
  'rules': {
    // best practices
    // Enforces getter/setter pairs in objects
    'accessor-pairs': 0,
    // treat var statements as if they were block scoped
    'block-scoped-var': 2,
    // specify the maximum cyclomatic complexity allowed in a program
    'complexity': [0, 11],
    // require return statements to either always or never specify values
    'consistent-return': 2,
    // specify curly brace conventions for all control statements
    'curly': [2, 'multi-line'],
    // require default case in switch statements
    'default-case': 2,
    // encourages use of dot notation whenever possible
    'dot-notation': [1, { 'allowKeywords': true }],
    // enforces consistent newlines before or after dots
    'dot-location': 0,
    // require the use of === and !==
    'eqeqeq': 2,
    // make sure for-in loops have an if statement
    'guard-for-in': 2,
    // disallow the use of alert, confirm, and prompt
    'no-alert': 1,
    // disallow use of arguments.caller or arguments.callee
    'no-caller': 2,
    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 0,
    // disallow else after a return in an if
    'no-else-return': 2,
    // disallow use of labels for anything other then loops and switches
    'no-empty-label': 2,
    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 0,
    // disallow use of eval()
    'no-eval': 2,
    // disallow adding to native types
    'no-extend-native': 2,
    // disallow unnecessary function binding
    'no-extra-bind': 2,
    // disallow fallthrough of case statements
    'no-fallthrough': 2,
    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 2,
    // disallow the type conversions with shorter notations
    'no-implicit-coercion': 0,
    // disallow use of eval()-like methods
    'no-implied-eval': 2,
    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 0,
    // disallow usage of __iterator__ property
    'no-iterator': 2,
    // disallow use of labeled statements
    'no-labels': 2,
    // disallow unnecessary nested blocks
    'no-lone-blocks': 2,
    // disallow creation of functions within loops
    'no-loop-func': 2,
    // disallow use of multiple spaces
    'no-multi-spaces': 2,
    // disallow use of multiline strings
    'no-multi-str': 2,
    // disallow reassignments of native objects
    'no-native-reassign': 2,
    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 2,
    // disallow use of new operator for Function object
    'no-new-func': 2,
    // disallows creating new instances of String,Number, and Boolean
    'no-new-wrappers': 2,
    // disallow use of (old style) octal literals
    'no-octal': 2,
    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': 2,
    // disallow reassignment of function parameters
    'no-param-reassign': 2,
    // disallow use of process.env
    'no-process-env': 0,
    // disallow usage of __proto__ property
    'no-proto': 2,
    // disallow declaring the same variable more then once
    'no-redeclare': 2,
    // disallow use of assignment in return statement
    'no-return-assign': 2,
    // disallow use of `javascript:` urls.
    'no-script-url': 2,
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 2,
    // disallow use of comma operator
    'no-sequences': 2,
    // restrict what can be thrown as an exception
    'no-throw-literal': 2,
    // disallow usage of expressions in statement position
    'no-unused-expressions': 2,
    // disallow unnecessary .call() and .apply()
    'no-useless-call': 0,
    // disallow use of void operator
    'no-void': 0,
    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': [0, { 'terms': ['todo', 'fixme', 'xxx'], 'location': 'start' }],
    // disallow use of the with statement
    'no-with': 2,
    // require use of the second argument for parseInt()
    'radix': 2,
    // requires to declare all vars on top of their containing scope
    'vars-on-top': 2,
    // require immediate function invocation to be wrapped in parentheses
    'wrap-iife': [2, 'any'],
    // require or disallow Yoda conditions
    'yoda': 2,

    // Legacy
    // enforce return after a callback
    'callback-return': 0,
    // enforces error handling in callbacks (node environment)
    'handle-callback-err': 0,
    // disallow mixing regular variable and require declarations
    'no-mixed-requires': [0, false],
    // disallow use of new operator with the require function
    'no-new-require': 0,
    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 0,
    // disallow process.exit()
    'no-process-exit': 0,
    // restrict usage of specified node modules
    'no-restricted-modules': 0,
    // disallow use of synchronous methods (off by default)
    'no-sync': 0,

    // specify the maximum depth that blocks can be nested
    'max-depth': [0, 4],
    // specify the maximum length of a line in your program
    'max-len': [0, 80, 4],
    // limits the number of parameters that can be used in the function declaration.
    'max-params': [0, 3],
    // specify the maximum number of statement allowed in a function
    'max-statements': [0, 10],
    // disallow use of bitwise operators
    'no-bitwise': 0,
    // disallow use of unary operators, ++ and --
    'no-plusplus': 0,

    // node
    // enforce return after a callback
    'callback-return': 0,
    // enforces error handling in callbacks (node environment)
    'handle-callback-err': 0,
    // disallow mixing regular variable and require declarations
    'no-mixed-requires': [0, false],
    // disallow use of new operator with the require function
    'no-new-require': 0,
    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 0,
    // disallow process.exit()
    'no-process-exit': 0,
    // restrict usage of specified node modules
    'no-restricted-modules': 0,
    // disallow use of synchronous methods (off by default)
    'no-sync': 0,

    // strict

    // babel inserts `'use strict';` for us
    'strict': [2, 'never'],

    // style
    // enforce spacing inside array brackets
    'array-bracket-spacing': [2, 'never'],
    // enforce one true brace style
    'brace-style': [2, '1tbs', {'allowSingleLine': true }],
    // require camel case names
    'camelcase': [2, {'properties': 'never'}],
    // enforce spacing before and after comma
    'comma-spacing': [2, {'before': false, 'after': true}],
    // enforce one true comma style
    'comma-style': [2, 'last'],
    // disallow padding inside computed properties
    'computed-property-spacing': [2, 'never'],
    // enforces consistent naming when capturing the current execution context
    'consistent-this': 0,
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 2,
    // require function expressions to have a name
    'func-names': 0,
    // enforces use of function declarations or expressions
    'func-style': 0,
    // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-length': 0,
    // this option sets a specific tab width for your code
    // https://github.com/eslint/eslint/blob/master/docs/rules/indent.md
    'indent': [2, 2, { "SwitchCase": 1, "VariableDeclarator": 1 }],
    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': 2,
    // enforces spacing between keys and values in object literal properties
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],
    // enforces empty lines around comments
    'lines-around-comment': 0,
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': 0,
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 0,
    // require a capital letter for constructors
    'new-cap': [2, {'newIsCap': true}],
    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 0,
    // allow/disallow an empty newline after var statement
    'newline-after-var': 0,
    // disallow use of the Array constructor
    'no-array-constructor': 0,
    // disallow use of the continue statement
    'no-continue': 0,
    // disallow comments inline after code
    'no-inline-comments': 0,
    // disallow if as the only statement in an else block
    'no-lonely-if': 0,
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 2,
    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': [2, {'max': 2, 'maxEOF': 1}],
    // disallow nested ternary expressions
    'no-nested-ternary': 2,
    // disallow use of the Object constructor
    'no-new-object': 2,
    // disallow space between function identifier and application
    'no-spaced-func': 2,
    // disallow the use of ternary operators
    'no-ternary': 0,
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 2,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 0,
    // disallow the use of Boolean literals in conditional expressions
    'no-unneeded-ternary': 0,
    // require padding inside curly braces
    'object-curly-spacing': [2, 'always'],
    // allow just one var statement per function
    'one-var': [2, 'never'],
    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': 0,
    // enforce operators to be placed before or after line breaks
    'operator-linebreak': 0,
    // enforce padding within blocks
    'padded-blocks': [2, 'never'],
    // require quotes around object literal property names
    'quote-props': 0,
    // specify whether double or single quotes should be used
    'quotes': [2, 'single', 'avoid-escape'],
    // require identifiers to match the provided regular expression
    'id-match': 0,
    // enforce spacing before and after semicolons
    'semi-spacing': [2, {'before': false, 'after': true}],
    // require or disallow use of semicolons instead of ASI
    'semi': [2, 'always'],
    // sort variables within the same declaration block
    'sort-vars': 0,
    // require a space before certain keywords
    'space-before-keywords': [2, 'always'],
    // require a space after certain keywords
    'space-after-keywords': [2, 'always'],
    // require or disallow space before blocks
    'space-before-blocks': 2,
    // require or disallow space before function opening parenthesis
    // https://github.com/eslint/eslint/blob/master/docs/rules/space-before-function-paren.md
    'space-before-function-paren': [2, { 'anonymous': 'always', 'named': 'never' }],
    // require or disallow spaces inside parentheses
    'space-in-parens': [2, 'never'],
    // require spaces around operators
    'space-infix-ops': 2,
    // require a space after return, throw, and case
    'space-return-throw-case': 2,
    // Require or disallow spaces before/after unary operators
    'space-unary-ops': 0,
    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': [2, 'always', {
      'exceptions': ['-', '+'],
      'markers': ['=', '!']           // space here to support sprockets directives
    }],
    // require regex literals to be wrapped in parentheses
    'wrap-regex': 0,

    // variables
    // enforce or disallow variable initializations at definition
    'init-declarations': 0,
    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 0,
    // disallow deletion of variables
    'no-delete-var': 2,
    // disallow labels that share a name with a variable
    'no-label-var': 0,
    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 2,
    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 2,
    // disallow use of undefined when initializing variables
    'no-undef-init': 0,
    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 2,
    // disallow use of undefined variable
    'no-undefined': 0,
    // disallow declaration of variables that are not used in the code
    'no-unused-vars': [2, {'vars': 'local', 'args': 'after-used'}],
    // disallow use of variables before they are defined
    'no-use-before-define': 2,

    // React
    // Prevent missing displayName in a React component definition
    'react/display-name': 0,
    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': 2,
    // Enforce or disallow spaces inside of curly braces in JSX attributes
    'react/jsx-curly-spacing': 0,
    // Prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': 0,
    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 2,
    // Enforce quote style for JSX attributes
    'react/jsx-quotes': 0,
    // Enforce propTypes declarations alphabetical sorting
    'react/jsx-sort-prop-types': 0,
    // Enforce props alphabetical sorting
    'react/jsx-sort-props': 0,
    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 2,
    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 2,
    // Prevent usage of dangerous JSX properties
    'react/no-danger': 0,
    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': [2, 'allow-in-func'],
    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 2,
    // Prevent multiple component definition per file
    'react/no-multi-comp': 2,
    // Prevent usage of unknown DOM property
    'react/no-unknown-property': 2,
    // Prevent missing props validation in a React component definition
    'react/prop-types': 2,
    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 2,
    // Restrict file extensions that may be required
    'react/require-extension': 0,
    // Prevent extra closing tags for components without children
    'react/self-closing-comp': 2,
    // Enforce component methods order
    'react/sort-comp': [2, {
      'order': [
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render'
      ]
    }],
    // Prevent missing parentheses around multilines JSX
    'react/wrap-multilines': 2
  }
};
