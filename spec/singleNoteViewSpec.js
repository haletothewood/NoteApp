"use strict";

aWholeNewWorld("Single Note View", function () {
  it("is an instantiated object", function () {
    var singleNoteView = new SingleNoteView;
    wish(singleNoteView).toBeInstanceOf(SingleNoteView)
  })
  it("can create HTML for a single note view", function () {
    var genie = function(){
      function showText() {
        return "Some text";
      };
    };
    // console.log(genie);
    var singleNoteView = new SingleNoteView(genie);
    wish(singleNoteView.showNote()).toEqual("<div id='single-note'>" + genie.showText + "</div>");
  })
})
