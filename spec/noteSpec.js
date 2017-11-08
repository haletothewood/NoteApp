"use strict";

describe("Note", function() {
  it("is created with the note as text", function () {
    var note = new Note("This is a note!");
    wish(note.showText()).isEqualTo("This is a note!")
  })
})
