'use strict';

var linter = require('eslint').linter;
var ESLintTester = require('eslint-tester');
var eslintTester = new ESLintTester(linter);


var valid = [
  'class Foo {' +
  '}          ',

  'class Foo {' +
  '  bar() {} ' +
  '}          '
].map(function(code) {
  return {
    code: code,
    args: [ 1, 'class', 'method' ],
    ecmaFeatures: { classes: true }
  };
});

var klass = 'class name should start with upper case.';

var invalidClass = [
  'class foo {' +
  '}          '
].map(function(code) {
  return {
    code: code,
    args: [ 1, 'class', 'method' ],
    ecmaFeatures: { classes: true },
    errors: [{ message: klass }]
  };
});

var method = 'method name should start with lower case.';

var invalidMethod = [
  'class Foo {' +
  '  Bar(){}  ' +
  '}          '
].map(function(code) {
  return {
    code: code,
    args: [ 1, 'class', 'method' ],
    ecmaFeatures: { classes: true },
    errors: [{ message: method }]
  };
});

eslintTester.addRuleTest('./lib/rules/name', {
  valid: valid,
  invalid: invalidClass.concat(invalidMethod)
});
