const getParam = (astRoot) => {

  const isObject = typeof astRoot === 'object';

  if(isObject) {

    const rules = astRoot.stylesheet.rules;

    rules.forEach((rule) => {
      if (rule.type === 'rule') {
        rule.declarations.forEach((declaration) => {

          declaration.getParam = function(paramPosition) {

            const declarationValues = declaration.value.split(' ');

            if (declarationValues[paramPosition]) {
              return declarationValues[paramPosition];
            } else {
              return declarationValues[0];
            }

          };

        });

      }

    });

  }

};

module.exports = getParam;
