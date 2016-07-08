
window.addEventListener("load", function() {
  new_list = new List(Task);
});

function addTask(){
  var newItem = document.getElementById("task_input").value
  new_list.addItem(newItem);
  document.getElementById('list').innerHTML = new_list.toHtml();
  resetContent();
}

function complete(i){
  new_list._list[i].finish();
  var task = document.getElementById("list_"+i);
  task.className += "completed";
}

function resetContent(){
  var inputBox = document.getElementById("task_input");
  inputBox.value='';
}
