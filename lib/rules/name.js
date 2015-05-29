'use strict';

module.exports = function(context) {
  function klass(node) {
    var message = 'class name should start with upper case.';

    if (context.options.indexOf('class') < 0) {
      return;
    }

    // walk for find id
    var id = context.getFirstToken(node);
    while (id.type !== 'Identifier') {
      id = context.getTokenAfter(id);
    }

    var first = id.value[0];
    if (first !== first.toUpperCase()) {
      context.report(node, message);
    }
  }

  function method(node) {
    var message = 'method name should start with lower case.';

    if (context.options.indexOf('method') < 0) {
      return;
    }

    // walk for find id
    var id = context.getFirstToken(node);
    while (id.type !== 'Identifier') {
      id = context.getTokenAfter(id);
    }

    var first = id.value[0];
    if (first !== first.toLowerCase()) {
      context.report(node, message);
    }
  }

  return {
    'ClassDeclaration': klass,
    'MethodDefinition': method
  };
};
