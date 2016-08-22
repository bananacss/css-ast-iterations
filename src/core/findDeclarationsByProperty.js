const findDeclarationsByProperty = (astRoot) => {

  const isObject = typeof astRoot === 'object';

  if(!astRoot.findDeclarationsByProperty && isObject) {

    const rules = astRoot.stylesheet.rules;

    rules.forEach((rule) => {
      if (rule.type === 'rule') {

        rule.findDeclarationsByProperty = function (property, callback) {

          rule.declarations.forEach((declaration, declarationIndex) => {

            if (declaration.property === property) {
              callback(declaration, declarationIndex);
            }

          });

        };

      }

    });

  }

};

module.exports = findDeclarationsByProperty;
