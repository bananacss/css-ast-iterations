/* eslint max-len: ["error", 100, 2] */

const assert = require('assert');
const css = require('css');
const findAllRulesByType = require('../src/core/findAllRulesByType');
const findDeclarationsByProperty = require('../src/core/findDeclarationsByProperty');

describe('findDeclarationsByProperty()', () => {

  // --------------------------

  it('Should return a iterations in a list of declarations ' +
    'in "Rule level" (filtered by property)', () => {

    const ast = css.parse(`
      @import module.css;
      .a {
        width: 10px;
        height: 100%;
      }
      /* comment */
      .b {
        color: #000;
      }
    `);

    // Add findAllRulesByType method on Object
    findAllRulesByType(ast);

    // Add findDeclarationsByProperty method on Object
    findDeclarationsByProperty(ast);

    const result = [];

    ast.findAllRulesByType('rule', (rule) => {

      rule.findDeclarationsByProperty('height', (declaration, declarationIndex) => {
        result.push([declarationIndex, declaration.property, declaration.value]);
      });

    });

    const expect = [1, 'height', '100%'].toString();

    assert.equal(result, expect);

  });

});
