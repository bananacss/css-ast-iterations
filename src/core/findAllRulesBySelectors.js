const findAllRulesBySelectors = (astRoot) => {

  const isObject = typeof astRoot === 'object';

  if(!astRoot.findAllRulesBySelectors && isObject) {

    astRoot.findAllRulesBySelectors = function (selectors, callback) {

      const rules = this.stylesheet.rules;

      rules.forEach((rule, indexRule) => {
        if ('' + rule.selectors === selectors) {
          callback(rule, indexRule);
        }
      });

    };

  }

};

module.exports = findAllRulesBySelectors;
