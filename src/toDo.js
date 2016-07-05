'use strict';

function ToDo(){
  this.tasks = [];
  this.html =["<ul>"]
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
  this.html.push("</ul>");
  return this.html.join('');
};

module.exports=ToDo;
