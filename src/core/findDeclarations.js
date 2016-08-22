const findDeclarations = (astRoot) => {

  const isObject = typeof astRoot === 'object';

  if(!astRoot.findDeclarations && isObject) {

    const rules = astRoot.stylesheet.rules;

    rules.forEach((rule) => {
      if (rule.type === 'rule') {

        rule.findDeclarations = function (callback) {

          rule.declarations.forEach((declaration, declarationIndex) => {
            callback(declaration, declarationIndex);
          });

        };

      }

    });

  }

};

module.exports = findDeclarations;
