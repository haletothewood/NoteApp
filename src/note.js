"use strict";

(function(exports) {
  exports.Note = function(text) {
    var _text = text;

    function showText() {
      return _text;
    };

    function previewText() {
      return _text.slice( 0, 20);
    }

    return { showText: showText,
              previewText: previewText };
  };
})(this);
