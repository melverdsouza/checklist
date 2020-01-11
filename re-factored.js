todoList = JSON.parse(localStorage.getItem('items'))

let dragID;
let dragText;

window.onload = function () {
    if (todoList !== null) {
      displayList();
    };
  };  

// add item to todo list
function addItem () {
    // add a new task to the list
    var item = document.getElementById('todo-item')
    if(event.key == 'Enter') {
        // if all the items are deleted instead of null it resets to []
        if (todoList == null) {
            todoList = [];
        }
        todoList.push([item.value, false])
        addToLocalStorage();
        clearChanges();
        displayList();
    }
    if(event.key == 'Enter'){
        document.getElementById('todo-item').value = ''
    }
}

function addToLocalStorage() {
    localStorage.setItem('items',JSON.stringify(todoList))
}

// clears the complete list after a new input is made
function clearChanges() {
    var ul = document.getElementById('todo');

    while(ul.firstChild) {
        ul.removeChild(ul.firstChild)
    }
}

// creates a separate li for each task
function displayList() {
    // var array = JSON.parse('items',localStorage.getItem('items'))
    var section = document.getElementById('todo')
    for(let i = 0; i < todoList.length; i++) {
        var division = document.createElement('li')
        division.id = i;
        division.draggable = 'true';
        division.className = 'list-item';
        division.addEventListener = ('dragstart', dragStart);
        division.addEventListener = ('dragover', dragOver);
        division.addEventListener = ('drop', dragDrop);
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('click',checkItem);
        checkbox.checked = todoList[i][1];
        let todoText = document.createElement('span');
        todoText.innerText = todoList[i][0];
        let cancel = document.createElement('div')
        cancel.className = 'class-img';
        cancel.addEventListener('click', removeItem);
        if(todoList[i][1]) {
            todoText.style.textDecoration = 'line-through';
            todoText.style.color = 'gray';
        }
        division.appendChild(checkbox);
        division.appendChild(todoText);
        division.appendChild(cancel);
        section.appendChild(division);
    }
}

function removeItem() {
    this.parentNode.parentNode.removeChild(this.parentNode)
    todoList.splice(this.parentNode.id, 1)
    addToLocalStorage();
}

function checkItem() {
    if(this.checked) {
        todoList[this.parentNode.id][1] = true
        addToLocalStorage();
        clearChanges();
        displayList();
    }
    else {
        todoList[this.parentNode.id][1] = false;
        addToLocalStorage();
        clearChanges();
        displayList();
      }
}

function dragStart(e) {
  dragID = this.id;
  dragText = e.target.textContent;
}


function dragOver(e) {
  e.preventDefault();
  e.stopPropagation();
}


function dragDrop(e) {
  todoList[this.id][0] = dragText;
  todoList[dragID][0] = e.target.textContent;
  var isChecked = todoList[this.id][1];
  todoList[this.id][1] = todoList[dragID][1];
  todoList[dragID][1] = isChecked;

  addToLocalStorage();
  clearChanges();
  displayList();
}