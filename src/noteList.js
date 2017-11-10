"use strict";

(function(exports) {
  function NoteList() {
    this._notes = [];
  }

  NoteList.prototype.allNotes = function() {
    return this._notes;
  };

  NoteList.prototype.addNote = function(text) {
    var note = new Note(text);
    this._notes.push(note);
    return this._notes.last;
  };

  NoteList.prototype.getAbbreviatedTextOfNotes = function() {
    var output = "";
    this.allNotes().map((note, index) => {
      output+='<li id="' + index + '">' + note.previewText() + '</li>';
    })
    return output;
  }

  NoteList.prototype.textOfLastNoteInList = function() {
    return noteList.allNotes()[noteList.allNotes().length - 1].previewText();
  };

  exports.NoteList = NoteList;
})(this);
