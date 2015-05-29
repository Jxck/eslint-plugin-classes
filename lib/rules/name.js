'use strict';

module.exports = function(context) {
  var message = 'class name should start with upper case.';

  function name(node) {
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

  return {
    'ClassDeclaration': name
  };
};
