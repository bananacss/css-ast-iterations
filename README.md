# CSS AST iterations

> :smile::green_heart::evergreen_tree: Provide a very simple API for complex iterations on the CSS abstract syntax tree (AST).

[![Build Status](https://travis-ci.org/afonsopacifer/css-ast-iterations.svg?branch=master)](https://travis-ci.org/afonsopacifer/css-ast-iterations)
[![Coverage Status](https://coveralls.io/repos/github/afonsopacifer/css-ast-iterations/badge.svg?branch=master)](https://coveralls.io/github/afonsopacifer/css-ast-iterations?branch=master)
[![Dependency Status](https://david-dm.org/afonsopacifer/css-ast-iterations.svg)](https://david-dm.org/afonsopacifer/css-ast-iterations)
[![devDependency Status](https://david-dm.org/afonsopacifer/css-ast-iterations/dev-status.svg)](https://david-dm.org/afonsopacifer/css-ast-iterations#info=devDependencies)
[![npm](https://img.shields.io/npm/vcss-ast-iterations.svg)](https://www.npmjs.com/package/css-ast-iterations)
[![npm](https://img.shields.io/npm/dtcss-ast-iterations.svg)](https://www.npmjs.com/package/css-ast-iterations)

## Table of contents

- [How to install](#how-to-install)
- [Basic Example](#basic-example)
- [CSS AST reference](#css-ast-reference)
- [Methods list](#methods-list)
  - [Stylesheet Level - root](#stylesheet-level-root)
  - [Rule Level](#rule-level)
  - [Declarations Level](#declarations-level)
- [Development](#development)
  - [Code Style](#code-style)
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
const css = require('css');
const addIterations = require('css-ast-iterations');

// Create the AST
const stylesheet = css.parse('.foo {color: #fff;} .bar { width: 50px;}');

// Add all methods for iterations
addIterations(stylesheet);

// Use a findRules method for find and iterates on all Rules
stylesheet.findRules((rule, ruleIndex) => {
  console.log(rule);
});
```
## CSS AST reference

View the [CSS AST Explorer](http://iamdustan.com/reworkcss_ast_explorer/).

![CSS AST reference](ast.png)

## Methods list

### Stylesheet Level - root

*Find and iterates on all Rules:*
```js
stylesheet.findAllRules((rule, ruleIndex) => {
  console.log(rule);
});
```

*Find and iterates on all Rules (filter by rule rules):*
```js
stylesheet.findAllRulesByType('rule', (rule, ruleIndex) => {
  console.log(rule);
});
```

*Find and iterates on all Rules (filter by import rules):*
```js
stylesheet.findAllRulesByType('import', (rule, ruleIndex) => {
  console.log(rule);
});
```

*Find and iterates on all Rules (filter by comment rules):*
```js
stylesheet.findAllRulesByType('comment', (rule, ruleIndex) => {
  console.log(rule);
});
```

*Find and iterates on all Selectors:*
```js
stylesheet.findAllSelectors((selectors, selectorIndex) => {
  console.log(selectors);
});
```

*Find and iterates on all imports:*
```js
stylesheet.findAllImport((url) => {
  console.log(url);
});
```

*Find and iterates on all Declarations:*
```js
stylesheet.findAllDeclarations((declaration) => {
    console.log(declaration.property);
    console.log(declaration.value);
});
```

*Find and iterates on all Declarations (filter by selectors):*
```js
stylesheet.findAllDeclarationsBySelectors('.foo', (declaration) => {
    console.log(declaration.property);
    console.log(declaration.value);
});
```

*Find and iterates on all Declarations (filter by property):*
```js
stylesheet.findAllDeclarationsByProperty('max-width', (declaration) => {
    console.log(declaration.property);
    console.log(declaration.value);
});
```

*Find and iterates on all Declarations (filter by value):*
```js
stylesheet.findAllDeclarationsByValue('500px', (declaration) => {
    console.log(declaration.property);
    console.log(declaration.value);
});
```

### Rule Level

*Find and iterates on Declarations:*
```js
// Stylesheet Level (root)
stylesheet.findAllRulesByType('rule', (rule, ruleIndex) => {

  // Rule Level
  rule.findDeclarations((declaration, declarationIndex) => {
    console.log(declaration);
  });

});
```

*Find and iterates on Declarations (filter by selectors):*
```js
// Stylesheet Level (root)
stylesheet.findAllRulesByType('rule', (rule, ruleIndex) => {

  // Rule Level
  rule.findDeclarationsBySelectors('.foo', (declaration, declarationIndex) => {
    console.log(declaration);
  });

});
```

*Find and iterates on Declarations (filter by property):*
```js
// Stylesheet Level (root)
stylesheet.findAllRulesByType('rule', (rule, ruleIndex) => {

  // Rule Level
  rule.findDeclarationsByProperty('max-width', (declaration, declarationIndex) => {
    console.log(declaration);
  });

});
```

*Find and iterates on Declarations (filter by value):*
```js
// Stylesheet Level (root)
stylesheet.findAllRulesByType('rule', (rule, ruleIndex) => {

  // Rule Level
  rule.findDeclarationsByValue('500px', (declaration, declarationIndex) => {
    console.log(declaration);
  });

});
```

### Declarations Level

*Add a new declaration:*
```js
// Stylesheet Level (root)
stylesheet.findAllRulesByType('rule', (rule, ruleIndex) => {

  // Rule Level
  rule.findDeclarationsByProperty('max-width', (declaration, declarationIndex) => {

    // Declarations Level
    rule.addDeclaration('width', '50px', declarationIndex);

  });

});
```

*Remove a declaration:*
```js
// Stylesheet Level (root)
stylesheet.findAllRulesByType('rule', (rule, ruleIndex) => {

  // Rule Level
  rule.findDeclarationsByProperty('max-width', (declaration, declarationIndex) => {

    // Declarations Level
    rule.removeDeclaration(declarationIndex);

  });

});
```

*Get a specific param from a value:*
```js
// Stylesheet Level (root)
stylesheet.findAllRulesByType('rule', (rule, ruleIndex) => {

  // Rule Level
  rule.findDeclarationsByProperty('max-width', (declaration, declarationIndex) => {

    // Declarations Level
    declaration.getParam(0); // position of param

  });

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
