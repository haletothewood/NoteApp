"use strict";

aWholeNewWorld("Note", function() {
  it("is created with the note as text", function () {
    var note = new Note("This is a note!");
    wish(note.showText()).toEqual("This is a note!")
  })
})
