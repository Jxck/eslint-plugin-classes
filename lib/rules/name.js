"use strict";

module.exports = function(context) {
    function klass(node) {
        var message = "class name should start with upper case.";

        if (context.options.indexOf("class") < 0) {
            return;
        }

        var name = node.id.name;
        var first = name[0];
        if (first !== first.toUpperCase()) {
            context.report(node, message);
        }
    }

    function method(node) {
        var message = "method name should start with lower case.";

        if (context.options.indexOf("method") < 0) {
            return;
        }

        var name = node.key.name;
        var first = name[0];
        if (first !== first.toLowerCase()) {
            context.report(node, message);
        }
    }

    return {
        "ClassDeclaration": klass,
        "MethodDefinition": method
    };
};
