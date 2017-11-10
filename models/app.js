var noteList = new NoteList();


var control = (function () {

  var createANoteButton = document.getElementById("create-a-new-note");
  var saveNote = document.getElementById("save-note");
  var submitMemo = document.getElementById("write-a-note");
  var form = document.getElementById("form-for-note");
  var noteItem = document.getElementsByTagName("li");
  var textArea = document.getElementById("text-for-note");

  var init = function () {
    addANewNote();
    getNoteText();
  };

  function getNoteLinks() {
    var items = document.getElementsByTagName("a");
    var itemsArray = Array.prototype.slice.call(items);

    itemsArray.map((item, index) => {
      item.addEventListener("click", function () {
        form.style.display = "block";
        textArea.value = noteList.allNotes()[index].showText();
      })
    });
  };

  function addANewNote() {
    createANoteButton.addEventListener("click", function () {
      textArea.value = "";
      form.style.display = "block";
    });
  }

  function getNoteText() {
    saveNote.addEventListener('click', function () {
      event.preventDefault();
      form.style.display = "none";
      var text = textArea.value;
      noteList.addNote(text);
      text = "";
      showAbbreviatedNote();
    });
  };

  function showAbbreviatedNote() {
    var ul = document.getElementById("notes")
    ul.innerHTML = noteList.getAbbreviatedTextOfNotes()
    getNoteLinks();
  }

  return {
    init: init
  };

}());
control.init();