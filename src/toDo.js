'use strict';

(function(exports) {
  function ToDo(){
    this.tasks = [];
    this.html =[]
  };

  ToDo.prototype.tasks = function() {
    return this.tasks;
  };

  ToDo.prototype.add = function (task) {
    this.tasks.push(task);
  };

  ToDo.prototype.returnList = function () {
    for(var i = 0; i < this.tasks.length; i++) {
      this.html.push("<li>" + this.tasks[i] + "</li>");
    }
    return this.html.join('');
  };

  exports.ToDo=ToDo;

})(this);
