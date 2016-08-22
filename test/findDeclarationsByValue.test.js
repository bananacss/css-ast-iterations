/* eslint max-len: ["error", 100, 2] */

const assert = require('assert');
const css = require('css');
const findAllRulesByType = require('../src/core/findAllRulesByType');
const findDeclarationsByValue = require('../src/core/findDeclarationsByValue');

describe('findDeclarationsByValue()', () => {

  // --------------------------

  it('Should return a iterations in a list of declarations' +
    ' in "Rule level" (filtered by value)', () => {

    const ast = css.parse(`
      @import module.css;
      .a {
        width: 10px;
        height: 100%;
      }
      /* comment */
      .b {
        color: #000;
        height: 10px;
      }
    `);

    // Add findAllRulesByType method on Object
    findAllRulesByType(ast);

    // Add findDeclarationsByValue method on Object
    findDeclarationsByValue(ast);

    const result = [];

    ast.findAllRulesByType('rule', (rule) => {

      rule.findDeclarationsByValue('10px', (declaration, declarationIndex) => {
        result.push([declarationIndex, declaration.property, declaration.value]);
      });

    });

    const expect = [[0, 'width', '10px'],[1, 'height', '10px']].toString();

    assert.equal(result, expect);

  });

});
