var Note = function(text){
  this._text = text;
  this._preview = text.slice( 0, 20);
};

Note.prototype.getText = function () {
return this._text;
};

Note.prototype.previewText = function () {
  return this._preview;
};
