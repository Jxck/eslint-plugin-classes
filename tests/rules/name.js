"use strict";

var rule = require("../../lib/rules/name"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();


var valid = [
    "class Foo {" +
    "}          ",

    "class Foo {" +
    "  bar() {} " +
    "}          "
].map(function(code) {
    return {
        code: code,
        options: [ 1, "class", "method" ],
        ecmaFeatures: { classes: true }
    };
});

var klass = "class name should start with upper case.";

var invalidClass = [
    "class foo {" +
    "}          "
].map(function(code) {
    return {
        code: code,
        options: [ 1, "class", "method" ],
        ecmaFeatures: { classes: true },
        errors: [{ message: klass }]
    };
});

var method = "method name should start with lower case.";

var invalidMethod = [
    "class Foo {" +
    "  Bar(){}  " +
    "}          "
].map(function(code) {
    return {
        code: code,
        options: [ 1, "class", "method" ],
        ecmaFeatures: { classes: true },
        errors: [{ message: method }]
    };
});

ruleTester.run("classes/name", rule, {
    valid: valid,
    invalid: invalidClass.concat(invalidMethod)
});
