var toDo = new ToDo();
toDo.add('Get milk');
toDo.add('Do cleaning');

var output = toDo.returnList();
document.getElementById('tasks-to-do').innerHTML = output;
