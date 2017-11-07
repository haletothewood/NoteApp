"use strict";

var beforeEach = function () {
  var noteList = new NoteList();
  return noteList
};

var noteList = beforeEach();
expect("Is created with an empty array", assert.isArray(noteList.allNotes()));

var text = "This is a note!"
noteList.addNote(text);
expect("It can store notes", assert.isInstanceOf(Note, noteList.allNotes()[0]));

var note = "This is a note!"
var noteList = beforeEach();
noteList.addNote(note)
expect("It returns all of the notes", assert.isEqual(1, noteList.allNotes().length));
