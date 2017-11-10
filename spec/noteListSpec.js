"use strict";

aWholeNewWorld("Note List", function() {

  it("is created with no notes", function() {
    var noteList = new NoteList();
    wish(noteList.allNotes()).toBeArray();
  });

  aWholeNewWorld('#addNote', function () {
    it("creates new notes", function () {
      var noteList = new NoteList();
      var text = "This is a note!";
      noteList.addNote(text);
      wish(noteList.allNotes()[0].showText()).toEqual(text);
    });
  });

  aWholeNewWorld('#getAbbreviatedTextOfNotes', function () {
    it("returns a string containing the HTML for all abbreviated notes", function () {
      var noteList = new NoteList();
      var text = "This is a note";
      noteList.addNote(text);
      var text = "Here is another note that is long";
      noteList.addNote(text);
      wish(noteList.getAbbreviatedTextOfNotes()).toEqual("<div id='0'>This is a note</div><div id='1'>Here is another note...</div>")
    })
  })

  aWholeNewWorld('#allNotes', function () {
    it("stores notes", function () {
      var noteList = new NoteList(text);
      var text = "This is a note!";
      noteList.addNote(text);
      wish(noteList.allNotes().length).toEqual(1);
    });
  });
});
