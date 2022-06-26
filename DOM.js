var toDoItems = [];

var span = document.querySelector('#createdBy');
span.innerHTML = span.innerHTML + ' Juan Cruz Matanzo';

function ToDo (description) {
    this.description = description;
    this.complete = false;
}

ToDo.prototype.completeToDo = function(){
    this.complete = true;
}

function buildToDo(todo, index) {
    let toDoShell = document.createElement('div');
    toDoShell.className = 'toDoShell';
    let toDoText = document.createElement('span');
    toDoText.innerHTML = todo.description;
    toDoText.id = index;
    if(todo.complete){
        toDoText.className = 'completeText';
    }
    toDoShell.appendChild(toDoText);
    toDoText.addEventListener('click', completeToDo);
    return toDoShell;
}

function buildToDos(toDos) {
    let newArray = toDos.map(buildToDo);
    return newArray;
}

function displayToDos() {
    var toDoContainer = document.querySelector('#toDoContainer');
    toDoContainer.innerHTML = '';
    let builds = buildToDos(toDoItems);
    builds.forEach(e => toDoContainer.appendChild(e));
}

function addToDo() {
    let toDoInput = document.getElementById('toDoInput').value;
    let newToDo = new ToDo(toDoInput);
    toDoItems.push(newToDo);
    document.getElementById('toDoInput').value = '';
    displayToDos();
}

document.getElementById('addButton').addEventListener('click', addToDo);

function completeToDo(event) {
    const index = event.target.id;
    toDoItems[index].completeToDo();
    displayToDos();
}

displayToDos();

if (typeof module !== 'undefined') {
    module.exports = {
      toDoItems: toDoItems,
      ToDo: ToDo,
      buildToDos: buildToDos,
      buildToDo: buildToDo,
      completeToDo: completeToDo,
      displayToDos: displayToDos,
      addToDo: addToDo
    };
}