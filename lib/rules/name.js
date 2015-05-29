'use strict';

module.exports = function(context) {
  var message = 'class name should start with upper case.';

  function klass(node) {
    if (context.options.indexOf('class') < 0) {
      return
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
    if (context.options.indexOf('method') < 0) {
      return
    }
  }

  return {
    'ClassDeclaration': klass,
    'MethodDefinition': method
  };
};
