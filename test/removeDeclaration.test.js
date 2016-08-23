/* eslint max-len: ["error", 100, 2] */

const assert = require('assert');
const css = require('css');
const findAllRulesByType = require('../src/core/findAllRulesByType');
const findDeclarationsByProperty = require('../src/core/findDeclarationsByProperty');
const removeDeclaration = require('../src/core/removeDeclaration');

describe('removeDeclaration()', () => {

  // --------------------------

  it('Should return a CSS with one property removed.', () => {

    const ast = css.parse(`
      .a {
        background: #fff;
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

    // Add removeDeclaration method on Object
    removeDeclaration(ast);

    ast.findAllRulesByType('rule', (rule) => {

      rule.findDeclarationsByProperty('width', () => {

        rule.removeDeclaration(0);

      });

    });

    const result = css.stringify(ast);
    const expect = '.a {\n  width: 10px;\n}\n\n.b {\n  color: #000;\n}';
    assert.equal(result, expect);

  });

});
