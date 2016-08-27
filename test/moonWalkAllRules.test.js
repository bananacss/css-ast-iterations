const assert = require('assert');
const css = require('css');
const moonWalkAllRules = require('../src/core/moonWalkAllRules');

describe('moonWalkAllRules()', () => {

  // --------------------------

  it('Should return a backwards iterations in a list of rules', () => {

    const ast = css.parse(`
      .a {
        width: 10px;
      }
      .b {
        color: #000;
      }
    `);

    // Add moonWalkAllRules method on Object
    moonWalkAllRules(ast);

    const result = [];

    ast.moonWalkAllRules((rule, indexRule) => {
      result.push([indexRule, rule.type]);
    });

    const expect = [[1, 'rule'], [0, 'rule']].toString();

    assert.equal(result, expect);

  });

});
