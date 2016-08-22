/* eslint max-len: ["error", 100, 2] */

const findAllRules = require('./core/findAllRules');
const findAllRulesByType = require('./core/findAllRulesByType');
const findAllSelectors = require('./core/findAllSelectors');
const findAllImport = require('./core/findAllImport');
const findAllDeclarations = require('./core/findAllDeclarations');
const findAllDeclarationsBySelectors = require('./core/findAllDeclarationsBySelectors');
const findAllDeclarationsByProperty = require('./core/findAllDeclarationsByProperty');
const findAllDeclarationsByValue = require('./core/findAllDeclarationsByValue');

const addIterations = (astRoot) => {

  // Stylesheet Level (root)
  findAllRules(astRoot);
  findAllRulesByType(astRoot);
  findAllSelectors(astRoot);
  findAllImport(astRoot);
  findAllDeclarations(astRoot);
  findAllDeclarationsBySelectors(astRoot);
  findAllDeclarationsByProperty(astRoot);
  findAllDeclarationsByValue(astRoot);

  // Rule Level

  // Declarations Level

};

module.exports = addIterations;
