"use strict";

(function(exports) {
  exports.Note = function(text) {
    var _text = text;

    function showText() {
      return _text;
    };

    return { showText: showText };
  };
})(this);
