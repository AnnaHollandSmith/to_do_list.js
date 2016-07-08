(function(exports) {
function Task(task) {
  this._task = task;
  this._status = false;
};

Task.prototype.get = function() {
  return this._task;
};

Task.prototype.status = function() {
  return this._status;
};

Task.prototype.finish = function() {
  this._status = true;
};

exports.Task = Task;
})(this);
