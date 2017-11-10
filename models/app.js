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
    var node = document.createElement('div');
    var textnode = document.createTextNode(noteList.textOfLastNoteInList());
    node.addAttribute
    node.appendChild(textnode);
    document.body.appendChild(node)
  };


  return {
    init: init
  };

}());
control.init();
