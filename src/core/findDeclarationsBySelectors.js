const findDeclarationsBySelectors = (astRoot) => {

  const isObject = typeof astRoot === 'object';

  if(!astRoot.findDeclarationsBySelectors && isObject) {

    const rules = astRoot.stylesheet.rules;

    rules.forEach((rule) => {
      if (rule.type === 'rule') {

        rule.findDeclarationsBySelectors = function (selectors, callback) {

          if ('' + rule.selectors === selectors) {
            rule.declarations.forEach((declaration, declarationIndex) => {
              callback(declaration, declarationIndex);
            });
          }

        };

      }

    });

  }

};

module.exports = findDeclarationsBySelectors;
