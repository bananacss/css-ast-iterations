# CSS AST iterations

> :smile::green_heart::evergreen_tree: Provide a very simple API for complex iterations on the CSS abstract syntax tree (AST).

[![Build Status](https://travis-ci.org/afonsopacifer/css-ast-iterations.svg?branch=master)](https://travis-ci.org/afonsopacifer/css-ast-iterations)
[![Coverage Status](https://coveralls.io/repos/github/afonsopacifer/css-ast-iterations/badge.svg?branch=master)](https://coveralls.io/github/afonsopacifer/css-ast-iterations?branch=master)
[![Dependency Status](https://david-dm.org/afonsopacifer/css-ast-iterations.svg)](https://david-dm.org/afonsopacifer/css-ast-iterations)
[![devDependency Status](https://david-dm.org/afonsopacifer/css-ast-iterations/dev-status.svg)](https://david-dm.org/afonsopacifer/css-ast-iterations#info=devDependencies)
[![npm](https://img.shields.io/npm/vcss-ast-iterations.svg)](https://www.npmjs.com/packagecss-ast-iterations)
[![npm](https://img.shields.io/npm/dtcss-ast-iterations.svg)](https://www.npmjs.com/packagecss-ast-iterations)

## Table of contents

- [How to install](#how-to-install)
- [Basic Example](#basic-example)
- [Features](#features)
- [Development](#development)
  - [Code Style](#code-style)
  - [Code Docs](#code-docs)
  - [Tests](#tests)
- [Versioning](#versioning)
- [Contributing](#contributing)
- [History](#history)
- [License](#license)

<hr>

## How to install

```sh
$ npm install css --save
$ npm install css-ast-iterations --save
```

## Basic Example

```js
// Require the CSS Parser
const css = require('css');
// Require the css-ast-iterations
require('css-ast-iterations');

// Create the AST
const stylesheet = '.foo {color: #fff;} .bar { width: 50px;}'
const ast = css.parse(stylesheet);

// Find and iterates on all Rules
ast.findRules((rule, ruleIndex) => {
  console.log(rule);
});

```

## Features

*Find and iterates on all **Rules**:*
```js
ast.findRules((rule, ruleIndex) => {
  console.log(rule);
});
```

*Find and iterates on all **Rules** (filter by **rule** rules):*
```js
ast.findRulesByType('rule', (rule, ruleIndex) => {
  console.log(rule);
});
```

*Find and iterates on all **Rules** (filter by **import** rules):*
```js
ast.findRulesByType('import', (rule, ruleIndex) => {
  console.log(rule);
});
```

*Find and iterates on all **Rules** (filter by **comment** rules):*
```js
ast.findRulesByType('comment', (rule, ruleIndex) => {
  console.log(rule);
});
```

*Find and iterates on all **Selectors**:*
```js
ast.findSelectors((selectors, selectorIndex) => {
  console.log(selectors);
});
```

*Find and iterates on all **imports**:*
```js
ast.findImport((url, importIndex) => {
  console.log(url);
});
```

*Find and iterates on all **Declarations**:*
```js
ast.findDeclarations((declaration, declarationIndex) => {
  console.log(declaration);
});
```

*Find and iterates on all **Declarations** (filter by **selectors**):*
```js
ast.findDeclarationsBySelectors('.afonso', (declaration, declarationIndex) => {
  console.log(declaration);
});
```

*Find and iterates on all **Declarations** (filter by **property**):*
```js
ast.findDeclarationsByProperty('bnn-size', (declaration, declarationIndex) => {
  console.log(declaration);
});
```

*Find and iterates on all **Declarations** (filter by **value**):*
```js
ast.findDeclarationsByValue('500px', (declaration, declarationIndex) => {
  console.log(declaration);
});
```

<hr>

## Development

### Code Style

Follow the [NodeJS code style guide](https://github.com/bananacss/banana-style-guide).

*Validate the code style with [ESLint](http://eslint.org/):*
```sh
$ npm run eslint
```

### Code Docs

*Generate code docs with [JSDocs](http://usejsdoc.org/)*
```sh
$ npm run jsdocs
```

View code docs in `out/index.html`

### Tests

*Run the unit tests with [mocha](https://mochajs.org/):*
```sh
$ npm test
```

*Calculate the coverage with [Istanbul](https://gotwarlost.github.io/istanbul/):*
```sh
$ npm run cover
```

<hr>

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/afonsopacifer/css-ast-iterations/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/afonsopacifer/css-ast-iterations/blob/master/CONTRIBUTING.md).

## History

See [Releases](https://github.com/afonsopacifer/css-ast-iterations/releases) for detailed changelog.

## License

[MIT License](https://github.com/afonsopacifer/css-ast-iterations/blob/master/LICENSE.md) © [Afonso Pacifer](http://afonsopacifer.com/)
