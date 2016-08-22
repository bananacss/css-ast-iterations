const addDeclaration = (astRoot) => {

  const isObject = typeof astRoot === 'object';

  if(isObject) {

    const rules = astRoot.stylesheet.rules;

    rules.forEach((rule) => {
      if (rule.type === 'rule') {
        rule.declarations.forEach((declaration) => {

          declaration.addDeclaration = function(property, value, index) {

            rule.declarations.splice(index, 0, {
              type: 'declaration',
              property: property,
              value: value
            });

          };

        });

      }

    });

  }

};

module.exports = addDeclaration;
