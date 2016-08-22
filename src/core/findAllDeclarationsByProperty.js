const findAllDeclarationsByProperty = (astRoot) => {

  const isObject = typeof astRoot === 'object';

  if(!astRoot.findAllDeclarationsByProperty && isObject) {

    astRoot.findAllDeclarationsByProperty = function (property, callback) {

      const rules = this.stylesheet.rules;

      rules.forEach((rule) => {

        if (rule.type === 'rule') {

          rule.declarations.forEach((declaration) => {

            if (declaration.property === property) {
              callback(declaration);
            }

          });
        }

      });

    };

  }

};

module.exports = findAllDeclarationsByProperty;
