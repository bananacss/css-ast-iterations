const findAllDeclarations = (astRoot) => {

  const isObject = typeof astRoot === 'object';

  if(!astRoot.findAllDeclarations && isObject) {

    astRoot.findAllDeclarations = function (callback) {

      const rules = this.stylesheet.rules;

      rules.forEach((rule) => {

        if (rule.type === 'rule') {
          rule.declarations.forEach((declaration, declarationIndex) => {
            callback(declaration, declarationIndex);
          });
        }

      });

    };

  }

};

module.exports = findAllDeclarations;
