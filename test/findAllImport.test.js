const assert = require('assert');
const css = require('css');
const findAllImport = require('../src/core/findAllImport');

describe('findAllImport()', () => {

  // --------------------------

  it('Should return a iterations in a list of import', () => {

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

    // Add findAllImport method on Object
    findAllImport(ast);

    const result = [];

    ast.findAllImport((url) => {
      result.push([url]);
    });

    const expect = ['module.css'].toString();

    assert.equal(result, expect);

  });

});
