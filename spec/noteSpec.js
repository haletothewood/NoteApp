"use strict";

aWholeNewWorld("Note", function() {
  it("is created with the note as text", function () {
    var note = new Note("This is a note!");
    wish(note.showText()).toEqual("This is a note!")
  })

  it('can return a 20 character abbreviated version of text as html', function () {
    var note = new Note("This is a note! This note is more than 20 characters long!");
    wish(note.previewText()).toEqual("<div>This is a note! This</div>")
  })
})
