"use strict";

var rule = require("../../lib/rules/space"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();


var valid = [
    "class Foo {" +
    "}          ",
    "class Foo {" +
    "  bar() {  " +
    "  }        " +
    "}          ",
    "class Foo {     " +
    "  static bar() {" +
    "  }             " +
    "}               ",
    "class Foo {" +
    "  bar() {  " +
    "  }        " +
    "           " +
    "  buz() {  " +
    "  }        " +
    "}          ",
    "class Foo {     " +
    "  get bar() {   " +
    "  }             " +
    "                " +
    "  set buz(a) {  " +
    "  }             " +
    "}               "
].map(function(code) {
    return {
        code: code,
        ecmaFeatures: { classes: true }
    };
});

var message = "no space between method name and parens";

var invalid = [
    "class Foo {" +
    "  bar () { " +
    "  }        " +
    "}          ",
    "class Foo {      " +
    "  static bar () {" +
    "  }              " +
    "}                ",
    "class Foo {" +
    "  bar () { " +
    "  }        " +
    "           " +
    "  buz() {  " +
    "  }        " +
    "}          ",
    "class Foo {     " +
    "  get bar () {  " +
    "  }             " +
    "}               ",
    "class Foo {     " +
    "  set bar (a) { " +
    "  }             " +
    "}               "
].map(function(code) {
    return {
        code: code,
        ecmaFeatures: { classes: true },
        errors: [{ message: message }]
    };
});

ruleTester.run("classes/space", rule, {
    valid: valid,
    invalid: invalid
});
