"use strict";
module.exports = {
    rules: {
        "space": require("./lib/rules/space"),
        "name": require("./lib/rules/name"),
        "constructor": require("./lib/rules/constructor")
    }
};
