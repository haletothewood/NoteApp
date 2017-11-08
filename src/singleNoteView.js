"use strict";

(function(exports) {
  exports.SingleNoteView = function (note) {
    var _note = note;

    function showNote () {
      return "<div id='single-note'>" + _note.showText + "</div>";
    };
    return { showNote: showNote }
  };
})(this);
