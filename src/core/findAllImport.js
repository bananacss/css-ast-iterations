const findAllImport = (astRoot) => {

  const isObject = typeof astRoot === 'object';

  if(!astRoot.findAllImport && isObject) {

    astRoot.findAllImport = function (callback) {

      const rules = this.stylesheet.rules;

      rules.forEach((rule) => {
        if (rule.type === 'import') {
          callback(rule.import);
        }
      });

    };

  }

};

module.exports = findAllImport;
