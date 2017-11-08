"use strict";

aWholeNewWorld("Note List", function() {

  it("is created with no notes", function() {
    var noteList = new NoteList();
    wish(noteList.allNotes()).toBeArray();
  })
 
  aWholeNewWorld('#addNote', function () {
    it("creates new notes", function () {
      var noteList = new NoteList();
      var text = "This is a note!"
      noteList.addNote(text);
      wish(noteList.allNotes()[0].showText()).toEqual("This is a note!")
    })
  })
  
  aWholeNewWorld('#allNotes', function () {
    it("stores notes", function () {
      var noteList = new NoteList(text);
      var text = "This is a note!"
      noteList.addNote(text)
      wish(noteList.allNotes().length).toEqual(1);
    })
  })
})