const findAllSelectors = (astRoot) => {

  const isObject = typeof astRoot === 'object';

  if(!astRoot.findAllSelectors && isObject) {

    astRoot.findAllSelectors = function (callback) {

      const rules = this.stylesheet.rules;

      rules.forEach((rule, indexSelectors) => {
        if (rule.type === 'rule') {
          callback(rule.selectors, indexSelectors);
        }
      });

    };

  }

};

module.exports = findAllSelectors;
