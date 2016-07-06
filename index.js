var toDo = new ToDo();


var output = toDo.returnList();
document.getElementById('tasks-to-do').innerHTML = output;

function addTask(){
    toDo.add(document.getElementById('task').value);
    document.getElementById('tasks-to-do').innerHTML = toDo.returnList();
  };

function stopDefAction(evt) {
    evt.preventDefault();
}

document.getElementById('submit').addEventListener('click', stopDefAction, false);
