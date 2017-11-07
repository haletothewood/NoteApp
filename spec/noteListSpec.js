"use strict";

var beforeEach = function () {
  var noteList = new NoteList();
  return noteList
};

var noteList = beforeEach();
expect("Is created with an empty array", assert.isEqual([], NoteList.notes));

var note = "This is a note!"
noteList.addNote(note)
expect("It can store notes", assert.isEqual([note], NoteList.notes.last));