'use strict';

var linter = require('eslint').linter;
var ESLintTester = require('eslint-tester');
var eslintTester = new ESLintTester(linter);


var valid = [
  '           ' +
  'class Foo {' +
  '}          '
  ,
  '           ' +
  'class Foo {' +
  '  bar() {  ' +
  '  }        ' +
  '}          '
  ,
  '                ' +
  'class Foo {     ' +
  '  static bar() {' +
  '  }             ' +
  '}               '
  ,
  '           ' +
  'class Foo {' +
  '  bar() {  ' +
  '  }        ' +
  '           ' +
  '  buz() {  ' +
  '  }        ' +
  '}          '
].map(function(code) {
  return {
    code: code,
    ecmaFeatures: { classes: true }
  };
});

var message = 'no space between method name and parens';

var invalid = [
  '           ' +
  'class Foo {' +
  '  bar () { ' +
  '  }        ' +
  '}          '
  ,
  '                 ' +
  'class Foo {      ' +
  '  static bar () {' +
  '  }              ' +
  '}                '
  ,
  '           ' +
  'class Foo {' +
  '  bar () { ' +
  '  }        ' +
  '           ' +
  '  buz() {  ' +
  '  }        ' +
  '}          '
].map(function(code) {
  return {
    code: code,
    ecmaFeatures: { classes: true },
    errors: [{ message: message }]
  };
});

eslintTester.addRuleTest('./lib/rules/space', {
  valid: valid,
  invalid: invalid
});
