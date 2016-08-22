const findDeclarationsByValue = (astRoot) => {

  const isObject = typeof astRoot === 'object';

  if(!astRoot.findDeclarationsByValue && isObject) {

    const rules = astRoot.stylesheet.rules;

    rules.forEach((rule) => {
      if (rule.type === 'rule') {

        rule.findDeclarationsByValue = function (value, callback) {

          rule.declarations.forEach((declaration, declarationIndex) => {

            if (declaration.value === value) {
              callback(declaration, declarationIndex);
            }

          });

        };

      }

    });

  }

};

module.exports = findDeclarationsByValue;
