"use strict";

(function(exports) {
  exports.Note = function(text) {
    var _text = text;

    function showText() {
      return _text;
    };

    function previewText() {
      if (_text.length <= 20) {
        return _text
      } else {
        return _text.slice(0, 20) + "...";
      }
    }

    return { showText: showText,
              previewText: previewText };
    };
})(this);
