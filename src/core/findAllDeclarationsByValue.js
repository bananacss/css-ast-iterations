const findAllDeclarationsByValue = (astRoot) => {

  const isObject = typeof astRoot === 'object';

  if(!astRoot.findAllDeclarationsByValue && isObject) {

    astRoot.findAllDeclarationsByValue = function (value, callback) {

      const rules = this.stylesheet.rules;

      rules.forEach((rule) => {

        if (rule.type === 'rule') {

          rule.declarations.forEach((declaration) => {

            if (declaration.value === value) {
              callback(declaration);
            }

          });
        }

      });

    };

  }

};

module.exports = findAllDeclarationsByValue;
