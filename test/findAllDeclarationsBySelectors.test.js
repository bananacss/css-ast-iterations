/* eslint max-len: ["error", 100, 2] */

const assert = require('assert');
const css = require('css');
const findAllDeclarationsBySelectors = require('../src/core/findAllDeclarationsBySelectors');

describe('findAllDeclarationsBySelectors()', () => {

  // --------------------------

  it('Should return a iterations in a list of declarations (filtered by selectors)', () => {

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

    // Add findAllDeclarationsBySelectors method on Object
    findAllDeclarationsBySelectors(ast);

    const result = [];

    ast.findAllDeclarationsBySelectors('.a', (declaration) => {
      result.push([declaration.property, declaration.value]);
    });

    const expect = [['width','10px']].toString();

    assert.equal(result, expect);

  });

});
