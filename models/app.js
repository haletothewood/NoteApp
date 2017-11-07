var control = (function() {

  var createANoteButton = document.getElementById("create-a-new-note");
  var saveNote = document.getElementById("save-note");
  var submitMemo = document.getElementById("write-a-note");
  var form = document.getElementById("form-for-note");

var init = function (){
  createANoteButton.addEventListener("click", function(){
    form.style.display = "block";
    console.log(form);
  });

};

return {
  init: init
};

}());
control.init();
