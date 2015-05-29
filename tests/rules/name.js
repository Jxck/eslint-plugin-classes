'use strict';

var linter = require('eslint').linter;
var ESLintTester = require('eslint-tester');
var eslintTester = new ESLintTester(linter);


var valid = [
  'class Foo {' +
  '}          '
].map(function(code) {
  return {
    code: code,
    args: [ 1, 'class' ],
    ecmaFeatures: { classes: true }
  };
});

var message = 'class name should start with upper case.';

var invalid = [
  'class foo {' +
  '}          '
].map(function(code) {
  return {
    code: code,
    args: [ 1, 'class' ],
    ecmaFeatures: { classes: true },
    errors: [{ message: message }]
  };
});

eslintTester.addRuleTest('./lib/rules/name', {
  valid: valid,
  invalid: invalid
});
