"use strict";

aWholeNewWorld("Single Note View", function () {
  it("can create HTML for a single note view", function () {

    var genie = {
      showText() {
        return "This is a note"
      }
    }

    var singleNoteView = new SingleNoteView(genie);
    wish(singleNoteView.showNote()).toEqual("<div id='single-note'>" + genie.showText() + "</div>");
  })
})