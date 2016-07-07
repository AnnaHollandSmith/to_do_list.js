'use strict';

(function(exports) {
  function ToDo(){
    this.tasks = [];
    this.html =[]
    this.isComplete = false;
  };

  ToDo.prototype.tasks = function() {
    return this.tasks;
  };

  ToDo.prototype.add = function (task) {
    this.tasks.push(task);
  };

  ToDo.prototype.returnList = function () {
    this.html = []
    for(var i = 0; i < this.tasks.length; i++) {
      this.html.push("<li>" + this.tasks[i] + "</li>");
    }
    return this.html.join('');
  };

  ToDo.prototype.complete = function () {
    this.isComplete = true;
  };

  ToDo.prototype.checkComplete = function () {
    return this.isComplete;
  };

  exports.ToDo=ToDo;

})(this);
