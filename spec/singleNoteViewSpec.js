"use strict";

aWholeNewWorld("Single Note View", function () {
  it("is an instantiated object", function () {
    var singleNoteView = new SingleNoteView;
    wish(singleNoteView).toBeInstanceOf(SingleNoteView)
  })
})