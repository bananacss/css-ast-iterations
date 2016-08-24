/* eslint max-len: ["error", 120, 2] */

const assert = require('assert');
const css = require('css');
const addRule = require('../src/core/addRule');

describe('addRule()', () => {

  // --------------------------

  it('Should return a CSS with one rule added.', () => {

    const ast = css.parse(`
      .a {
        width: 10px;
      }

      .b {
        color: #000;
      }
    `);

    // Add removeDeclaration method on Object
    addRule(ast);

    const newRule = css.parse(`
      .foo {
        height: 40px;
      }
    `);

    ast.addRule(newRule, 0);

    const result = css.stringify(ast);
    const expect = '.foo {\n  height: 40px;\n}\n\n.a {\n  width: 10px;\n}\n\n.b {\n  color: #000;\n}';
    assert.equal(result, expect);

  });

  // --------------------------

  it('Should return a CSS with one rule added on position 1.', () => {

    const ast = css.parse(`
      .a {
        width: 10px;
      }

      .b {
        color: #000;
      }
    `);

    // Add removeDeclaration method on Object
    addRule(ast);

    const newRule = css.parse(`
      .foo {
        height: 40px;
      }
    `);

    ast.addRule(newRule, 1);

    const result = css.stringify(ast);
    const expect = '.a {\n  width: 10px;\n}\n\n.foo {\n  height: 40px;\n}\n\n.b {\n  color: #000;\n}';
    assert.equal(result, expect);

  });

});
