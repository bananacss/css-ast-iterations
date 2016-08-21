const assert = require('assert');
const css = require('css');
const findAllRules = require('../src/core/findAllRules');

describe('findAllRules()', () => {

  // --------------------------

  it('Should return a iterations in a list of rules', () => {

    const ast = css.parse('.a{width: 10px;}b.{color:#000;}');

    // Add findAllRules method on Object
    findAllRules(ast);

    const result = [];

    ast.findAllRules((rule, indexRule) => {
      result.push([indexRule, rule.type]);
    });

    const expect = [ [ 0, 'rule' ], [ 1, 'rule' ] ];

    assert.equal(result, expect);

  });

});
