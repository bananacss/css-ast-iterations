/* eslint max-len: ["error", 100, 2] */

const assert = require('assert');
const css = require('css');
const findAllDeclarationsByProperty = require('../src/core/findAllDeclarationsByProperty');

describe('findAllDeclarationsByProperty()', () => {

  // --------------------------

  it('Should return a iterations in a list of declarations (filtered by property)', () => {

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

    // Add findAllDeclarationsByProperty method on Object
    findAllDeclarationsByProperty(ast);

    const result = [];

    ast.findAllDeclarationsByProperty('color', (declaration) => {
      result.push([declaration.property, declaration.value]);
    });

    const expect = [['color','#000']].toString();

    assert.equal(result, expect);

  });

});
