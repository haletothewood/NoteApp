var noteList = new NoteList();
console.log(noteList);


var control = (function() {

  var createANoteButton = document.getElementById("create-a-new-note");
  var saveNote = document.getElementById("save-note");
  var submitMemo = document.getElementById("write-a-note");
  var form = document.getElementById("form-for-note");

  var init = function (){
    createEventListeners();
    getNoteText();
  };

  function createEventListeners() {
    console.log("You rang?")
    createANoteButton.addEventListener("click", function(){
      form.style.display = "block";
    });

  }

  function getNoteText() {
    saveNote.addEventListener('click', function () {
      event.preventDefault();
      form.style.display = "none";
      var text = document.getElementById("text-for-note").value;
      noteList.addNote(text);
      document.getElementById("text-for-note").value = "";
      showAbbreviatedNote();
    });
  };

  function showAbbreviatedNote() {
    var ul = document.getElementById("notes")
    ul.innerHTML = noteList.getAbbreviatedTextOfNotes()
  }

  return {
    init: init
  };

}());
control.init();
