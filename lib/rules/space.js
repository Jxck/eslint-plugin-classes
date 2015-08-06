'use strict';

module.exports = function(context) {
  var message = 'no space between method name and parens';

  function space(node) {
    var key = node.key;
    var paren = context.getTokenAfter(key);

    if (key.range[1] !== paren.range[0]) {
      context.report(node, message);
    }
  }

  return {
    'MethodDefinition': space
  };
};
