const findAllRules = (astRoot) => {

  const isObject = typeof astRoot === 'object';

  if(!astRoot.findAllRules && isObject) {

    astRoot.findAllRules = function (callback) {

      const rules = this.stylesheet.rules;

      rules.forEach((rule, indexRule) => {
        callback(rule, indexRule);
      });

    };

  }

};

module.exports = findAllRules;
