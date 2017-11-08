"use strict";

(function(exports) {
  exports.Note = function(text){
    var _text = text;

    showText = function(text){
      return _text;
    };
    return { showText: showText };
  };

  })(this);

  note = new Note;
