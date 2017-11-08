"use strict";

describe("Note List", function() {

  it("is created with no notes", function() {
    var noteList = new NoteList();
    wish(noteList.allNotes()).isArray();
  })
 
  it("creates new notes", function () {
    var noteList = new NoteList();
    var text = "This is a note!"
    noteList.addNote(text);
    wish(noteList.allNotes()[0]).isInstanceOf(Note);
  })
  
  it("stores notes", function () {
    var noteList = new NoteList(text);
    var text = "This is a note!"
    noteList.addNote(text)
    wish(noteList.allNotes().length).isEqualTo(1);
  })
})