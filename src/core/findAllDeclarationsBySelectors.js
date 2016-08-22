const findAllDeclarationsBySelectors = (astRoot) => {

  const isObject = typeof astRoot === 'object';

  if(!astRoot.findAllDeclarationsBySelectors && isObject) {

    astRoot.findAllDeclarationsBySelectors = function (selectors, callback) {

      const rules = this.stylesheet.rules;

      rules.forEach((rule) => {

        if (rule.type === 'rule' & '' + rule.selectors === selectors) {

          rule.declarations.forEach((declaration) => {
            callback(declaration);
          });
        }

      });

    };

  }

};

module.exports = findAllDeclarationsBySelectors;
