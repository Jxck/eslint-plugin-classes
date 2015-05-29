'use strict';

module.exports = function(context) {
  var message = 'no space between method name and parens';

  function space(node) {
    var id = context.getFirstToken(node);

    // case like static method
    while (id.type !== 'Identifier') {
      id = context.getTokenAfter(id);
    }

    var paren = context.getTokenAfter(id);

    if (id.range[1] !== paren.range[0]) {
      context.report(node, message);
    }
  }

  return {
    'MethodDefinition': space
  };
};
