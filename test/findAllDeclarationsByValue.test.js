/* eslint max-len: ["error", 100, 2] */

const assert = require('assert');
const css = require('css');
const findAllDeclarationsByValue = require('../src/core/findAllDeclarationsByValue');

describe('findAllDeclarationsByValue()', () => {

  // --------------------------

  it('Should return a iterations in a list of declarations (filtered by value)', () => {

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

    // Add findAllDeclarationsByValue method on Object
    findAllDeclarationsByValue(ast);

    const result = [];

    ast.findAllDeclarationsByValue('10px', (declaration) => {
      result.push([declaration.property, declaration.value]);
    });

    const expect = [['width','10px']].toString();

    assert.equal(result, expect);

  });

});
