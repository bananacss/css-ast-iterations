const assert = require('assert');
const css = require('css');
const findAllDeclarations = require('../src/core/findAllDeclarations');

describe('findAllDeclarations()', () => {

  // --------------------------

  it('Should return a iterations in a list of declarations', () => {

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

    // Add findAllDeclarations method on Object
    findAllDeclarations(ast);

    const result = [];

    ast.findAllDeclarations((declaration) => {
      result.push([declaration.property, declaration.value]);
    });

    const expect = [['width','10px'], ['color','#000']].toString();

    assert.equal(result, expect);

  });

});
