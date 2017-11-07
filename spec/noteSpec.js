"use strict";

var beforeEach = function () {
  var note = new Note("This is a note!");
  return note
};

var note = beforeEach();
expect("Note should be created with some note text", assert.isEqual("This is a note!", note.showText()))
