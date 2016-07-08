(function(exports) {
  function List(Task) {
    this.task = Task;
    this._list = [];
  }

  List.prototype = {
    addItem : function(item) {
      this._list.push(new this.task(item));
    },
    items : function() {
      return this._list;
    },
    _toJson : function() {
      var jsonified = JSON.stringify({"tasks": this._list});
      return jsonified;
    },
    toHtml : function() {
      var formattedList = [];
      for(i=0; i < this._list.length; i++) {
        var completeClass = ''
        if (this._list[i]._status == true) {
          completeClass = "class='completed'"
        }
        var button = '<input id="submit" type="submit" onclick="complete('+i+')" value="&#9989" name="completed">'
        formattedList.push("<li id='list_"+i+"'"+completeClass+">" + this._list[i]._task + button +"</li>");
      }
      return ("<ul>" + formattedList.join('') + "</ul>")
    }
  }
  exports.List = List;
})(this);
