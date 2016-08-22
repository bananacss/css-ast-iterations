/* eslint max-len: ["error", 100, 2] */

const assert = require('assert');
const css = require('css');
const findAllRulesByType = require('../src/core/findAllRulesByType');

describe('findAllRulesByType()', () => {

  // --------------------------

  it('Should return a iterations in a list of rules (filtered by comment)', () => {

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
    findAllRulesByType(ast);

    const result = [];

    ast.findAllRulesByType('comment', (rule, indexRule) => {
      result.push([indexRule, rule.type]);
    });

    const expect = [2, 'comment'].toString();

    assert.equal(result, expect);

  });

  // --------------------------

  it('Should return a iterations in a list of rules (filtered by rule)', () => {

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
    findAllRulesByType(ast);

    const result = [];

    ast.findAllRulesByType('rule', (rule, indexRule) => {
      result.push([indexRule, rule.type]);
    });

    const expect = [[1, 'rule'],[3, 'rule']].toString();

    assert.equal(result, expect);

  });

  // --------------------------

  it('Should return a iterations in a list of rules (filtered by import)', () => {

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
    findAllRulesByType(ast);

    const result = [];

    ast.findAllRulesByType('import', (rule, indexRule) => {
      result.push([indexRule, rule.type]);
    });

    const expect = [0, 'import'].toString();

    assert.equal(result, expect);

  });

});
