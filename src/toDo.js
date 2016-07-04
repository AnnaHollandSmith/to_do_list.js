'use strict';

function ToDo(){
  this.tasks = [];

};


var toDo = new ToDo();

ToDo.prototype.tasks = function() {
  return this.tasks;
};



module.exports=ToDo;
