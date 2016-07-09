<<<<<<< HEAD
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
=======

window.addEventListener("load", function() {
  new_list = new List(Task);
  xhttp();
});

function addTask(){
  var newItem = document.getElementById("task_input").value
  new_list.addItem(newItem);
  renderAndReset();
}

function renderAndReset() {
  document.getElementById('list').innerHTML = new_list.toHtml();
  resetContent();
}

function addApiTask(item, objectStatus){
  new_list.addItem(item, objectStatus);
  renderAndReset();
}

function complete(i){
  new_list._list[i].finish();
  document.getElementById('list').innerHTML = new_list.toHtml();
}

function resetContent(){
  var inputBox = document.getElementById("task_input");
  inputBox.value='';
}

function xhttp(){
  var xhttp;
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
      } else {
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function(){
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var myJson = JSON.parse(xhttp.responseText)
      console.log(myJson)
      var listItems = myJson.map(function(object){
        var item = object.text;
        var objectStatus = object.completed;
        addApiTask(item, objectStatus)
      }
    )}
  }
 xhttp.open("GET", "http://quiet-beach-24792.herokuapp.com/todos.json", true);
 xhttp.send();
}
>>>>>>> 039356faedc8f7bb34040fbfac8c00bd90338ad3
