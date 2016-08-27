const moonWalkAllRules = (astRoot) => {

  const isObject = typeof astRoot === 'object';

  if(!astRoot.moonWalkAllRules && isObject) {

    astRoot.moonWalkAllRules = function (callback) {

      const rules = this.stylesheet.rules;

      for (let i = rules.length - 1; i >= 0; i--) {
        callback(rules[i], i);
      }

    };

  }

};

module.exports = moonWalkAllRules;
