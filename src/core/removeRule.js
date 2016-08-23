const removeRule = (astRoot) => {

  const isObject = typeof astRoot === 'object';

  if(isObject) {

    astRoot.removeRule = function (index) {
      const rules = astRoot.stylesheet.rules;
      rules.splice(index, 1);
    };

  }

};

module.exports = removeRule;
