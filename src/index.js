const findRules = require('./core/findAllRules');

const addIterations = (astRoot) => {

  // Stylesheet Level (root)
  findRules(astRoot);

  // Rule Level

  // Declarations Level

};

module.exports = addIterations;
