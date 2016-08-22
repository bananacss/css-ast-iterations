const removeDeclaration = (astRoot) => {

  const isObject = typeof astRoot === 'object';

  if(isObject) {

    const rules = astRoot.stylesheet.rules;

    rules.forEach((rule) => {
      if (rule.type === 'rule') {
        rule.declarations.forEach((declaration) => {

          declaration.removeDeclaration = function(index) {

            rule.declarations.splice(index, 1);

          };

        });

      }

    });

  }

};

module.exports = removeDeclaration;
