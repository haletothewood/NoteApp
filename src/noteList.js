"use strict";

(function(exports) {
  function NoteList() {
    this._notes = [];
  }

  NoteList.prototype.allNotes = function() {
    return this._notes;
  };

  NoteList.prototype.addNote = function(text) {
    note = new Note(text);
    this._notes.push(note);
    return this._notes.last;
  };

  exports.NoteList = NoteList;
})(this);
