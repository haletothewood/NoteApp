"use strict";

(function(exports) {
  exports.NoteList = function() {
    var _notes = [];

    allNotes = function() {
      return _notes;
    };

    addNote = function(text) {
      // var note = new Note(text);
      _notes.push(text);
      return _notes.last;
    };
    return { allNotes: allNotes, addNote: addNote };
  };

  })(this);
  
noteList = new NoteList;
