const removeDeclaration = (astRoot) => {

  const isObject = typeof astRoot === 'object';

  if(isObject) {

    const rules = astRoot.stylesheet.rules;

    rules.forEach((rule) => {
      if (rule.type === 'rule') {
        rule.declarations.forEach((declaration) => {

          rule.removeDeclaration = function(index) {

            rule.declarations.splice(index, 1);

          };

        });

      }

    });

  }

};

module.exports = removeDeclaration;
