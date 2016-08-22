const assert = require('assert');
const css = require('css');
const findAllSelectors = require('../src/core/findAllSelectors');

describe('findAllSelectors()', () => {

  // --------------------------

  it('Should return a iterations in a list of selectors', () => {

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

    // Add findAllSelectors method on Object
    findAllSelectors(ast);

    const result = [];

    ast.findAllSelectors((selectors, selectorsIndex) => {
      result.push([selectorsIndex, selectors]);
    });

    const expect = [[1, '.a'], [3, '.b']].toString();

    assert.equal(result, expect);

  });

});
