const addRule = (astRoot) => {

  const isObject = typeof astRoot === 'object';

  if(isObject) {

    astRoot.addRule = function (newRule, index) {
      const rules = astRoot.stylesheet.rules;
      rules.splice(index, 0, newRule);
    };

  }

};

module.exports = addRule;
