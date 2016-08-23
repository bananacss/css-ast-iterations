/* eslint max-len: ["error", 100, 2] */

const assert = require('assert');
const css = require('css');
const findAllRulesByType = require('../src/core/findAllRulesByType');
const findDeclarationsByProperty = require('../src/core/findDeclarationsByProperty');
const addDeclaration = require('../src/core/addDeclaration');

describe('addDeclaration()', () => {

  // --------------------------

  it('Should return a CSS with one new property added.', () => {

    const ast = css.parse(`
      .a {
        width: 10px;
      }
      .b {
        color: #000;
      }
    `);

    // Add findAllRulesByType method on Object
    findAllRulesByType(ast);

    // Add findDeclarationsByProperty method on Object
    findDeclarationsByProperty(ast);

    // Add addDeclaration method on Object
    addDeclaration(ast);

    ast.findAllRulesByType('rule', (rule) => {

      rule.findDeclarationsByProperty('width', () => {

        rule.addDeclaration('background', '#fff', 0);

      });

    });

    const result = css.stringify(ast);
    const expect = '.a {\n  background: #fff;\n  width: 10px;\n}\n\n.b {\n  color: #000;\n}';
    assert.equal(result, expect);

  });

});
