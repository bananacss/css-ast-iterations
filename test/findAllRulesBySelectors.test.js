/* eslint max-len: ["error", 100, 2] */

const assert = require('assert');
const css = require('css');
const findAllRulesBySelectors = require('../src/core/findAllRulesBySelectors');

describe('findAllRulesBySelectors()', () => {

  // --------------------------

  it('Should return a iterations in a list of rules (filtered by selectors)', () => {

    const ast = css.parse(`
      @import module.css;
      .a {
        width: 10px;
      }
      /* comment */
      .b {
        color: #000;
      }
    `);

    // Add findAllRulesByType method on Object
    findAllRulesBySelectors(ast);

    const result = [];

    ast.findAllRulesBySelectors('.a', (rule, indexRule) => {
      result.push([indexRule, rule.selectors]);
    });

    const expect = [1, '.a'].toString();

    assert.equal(result, expect);

  });

});
