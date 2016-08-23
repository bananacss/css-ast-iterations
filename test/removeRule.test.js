/* eslint max-len: ["error", 100, 2] */

const assert = require('assert');
const css = require('css');
const findAllRulesBySelectors = require('../src/core/findAllRulesBySelectors');
const removeRule = require('../src/core/removeRule');

describe('removeRule()', () => {

  // --------------------------

  it('Should return a CSS with one rule removed.', () => {

    const ast = css.parse(`
      .a {
        width: 10px;
      }
      .b {
        color: #000;
      }
    `);

    // Add findAllRulesByType method on Object
    findAllRulesBySelectors(ast);

    // Add removeDeclaration method on Object
    removeRule(ast);

    ast.findAllRulesBySelectors('.b', (rule, index) => {
      ast.removeRule(index);
    });

    const result = css.stringify(ast);
    const expect = '.a {\n  width: 10px;\n}';
    assert.equal(result, expect);

  });

  // --------------------------

  it('Should return a CSS with one rule removed on position 3.', () => {

    const ast = css.parse(`
      .a {
        width: 10px;
      }

      .b {
        color: #000;
      }

      .c {
        color: #fff;
      }
    `);

    // Add findAllRulesByType method on Object
    findAllRulesBySelectors(ast);

    // Add removeDeclaration method on Object
    removeRule(ast);

    ast.findAllRulesBySelectors('.b', (rule, index) => {
      ast.removeRule(index);
    });

    const result = css.stringify(ast);
    const expect = '.a {\n  width: 10px;\n}\n\n.c {\n  color: #fff;\n}';
    assert.equal(result, expect);

  });

});
