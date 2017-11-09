"use strict";

(function(exports) {
  exports.Note = function(text) {
    var _text = text;

    function showText() {
      return _text;
    };

    function previewText() {
      var textAbbrev = _text.slice( 0, 20);
      return "<div>" + textAbbrev + "</div>"
    }

    return { showText: showText,
              previewText: previewText };
  };
})(this);
