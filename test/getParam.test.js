/* eslint max-len: ["error", 100, 2] */

const assert = require('assert');
const css = require('css');
const findAllRulesByType = require('../src/core/findAllRulesByType');
const findDeclarationsByProperty = require('../src/core/findDeclarationsByProperty');
const getParam = require('../src/core/getParam');

describe('getParam()', () => {

  // --------------------------

  it('Should return a specific value of a shorthand', () => {

    const ast = css.parse(`
      .a {
        margin: 10px 5px;
      }
      .b {
        color: #000;
      }
    `);

    // Add findAllRulesByType method on Object
    findAllRulesByType(ast);

    // Add findDeclarationsByProperty method on Object
    findDeclarationsByProperty(ast);

    // Add getParam method on Object
    getParam(ast);

    let result;

    ast.findAllRulesByType('rule', (rule) => {

      rule.findDeclarationsByProperty('margin', (declaration) => {

        result = declaration.getParam(1);

      });

    });

    const expect = '5px';
    assert.equal(result, expect);

  });

// --------------------------

  it('If dont exist the especific value, should return the' +
    ' first value of a shorthand.', () => {

    const ast = css.parse(`
      .a {
        margin: 10px 5px;
      }
      .b {
        color: #000;
      }
    `);

    // Add findAllRulesByType method on Object
    findAllRulesByType(ast);

    // Add findDeclarationsByProperty method on Object
    findDeclarationsByProperty(ast);

    // Add getParam method on Object
    getParam(ast);

    let result;

    ast.findAllRulesByType('rule', (rule) => {

      rule.findDeclarationsByProperty('margin', (declaration) => {

        result = declaration.getParam(3);

      });

    });

    const expect = '10px';
    assert.equal(result, expect);

  });

});
