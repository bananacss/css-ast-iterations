const findAllRulesByType = (astRoot) => {

  const isObject = typeof astRoot === 'object';

  if(!astRoot.findAllRulesByType && isObject) {

    astRoot.findAllRulesByType = function (type, callback) {

      const rules = this.stylesheet.rules;

      rules.forEach((rule, indexRule) => {
        if (rule.type === type) {
          callback(rule, indexRule);
        }
      });

    };

  }

};

module.exports = findAllRulesByType;
