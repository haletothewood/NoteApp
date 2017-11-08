"use strict";

var beforeEach = function () {
  var noteList = new NoteList();
  return noteList
};

var noteList = beforeEach();
wish(noteList.allNotes()).isArray();


var text = "This is a note!"
noteList.addNote(text);
wish(noteList.allNotes()[0]).isInstanceOf(Note);

var noteList = beforeEach();
noteList.addNote(note)
wish(noteList.allNotes().length).isEqualTo(1);