
window.addEventListener("load", function() {
  new_list = new List(Task);
  xhttp();
});

function addTask(){
  console.log(new_list._list)
  var newItem = document.getElementById("task_input").value
  new_list.addItem(newItem);
  document.getElementById('list').innerHTML = new_list.toHtml();
  resetContent();
}

function addApiTask(newItem){
  new_list.addItem(newItem);
  document.getElementById('list').innerHTML = new_list.toHtml();
  resetContent();
}

function complete(i){
  new_list._list[i].finish();
  var task = document.getElementById("list_"+i);
  // task.className += "completed";
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
      var listItems = myJson.map(function(object){
        var item = object.text;
        addApiTask(item)
      }
    )}
  }
 xhttp.open("GET", "http://quiet-beach-24792.herokuapp.com/todos.json", true);
 xhttp.send();
}
