"use strict";

var beforeEach = function () {
  var note = new Note("This is a note!");
  return note
};

var note = beforeEach();
wish(note.showText()).isEqualTo("This is a note!")
