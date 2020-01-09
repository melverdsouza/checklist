let inputVal 
let taskList = [];
let id 
function enter() {
    if(event.key === 'Enter') {
        inputVal = document.getElementById("take-input").value;
        // alert(inputVal)
        let obj = {}
        taskList.push(obj);
        taskList[taskList.length-1]['text'] = inputVal
        taskList[taskList.length-1]['complete'] = false
    }
}

function resetForm() {
    if(event.key === 'Enter') {
        document.getElementById("take-input").value = '';
    }
}

function createLi() {
    if(event.key === 'Enter') {
        let fullTag = document.createElement('li');
        fullTag.setAttribute('class', 'task');
        fullTag.setAttribute('draggable', 'true')
        fullTag.setAttribute('ondragstart', 'onDragStart(event)')
        fullTag.setAttribute('ondragover', 'onDragOver(event)')
        fullTag.setAttribute('ondrop', 'onDrop(event)')
        document.getElementById('taskList').appendChild(fullTag);
    }
}

function newTask() {
    if(event.key === 'Enter') {
        let complete = document.createElement('input')
        let tag = document.createElement('p');
        let del = document.createElement('button');
        complete.setAttribute('type', 'checkbox')
        complete.setAttribute('class', 'complete')
        complete.setAttribute('onclick','checkedbox()')
        // complete.setAttribute('onclick','uncheckedbox()')
        tag.setAttribute('class', 'ele')
        del.setAttribute('class', 'btn')
        del.setAttribute('onclick','removeTask(this.value)')
        // del.setAttribute('name', 'id')
        // del.setAttribute('value', )
        tag.innerHTML = taskList[taskList.length-1]['text'];
        del.innerHTML = 'delete';
        document.getElementsByClassName('task')[taskList.length-1].appendChild(complete)
        document.getElementsByClassName('task')[taskList.length-1].appendChild(tag)
        document.getElementsByClassName('task')[taskList.length-1].appendChild(del)
    }
}

function addValues() {
    for(let i = 0; i < taskList.length; i++) {
        document.getElementsByClassName('btn')[i].setAttribute('value', i)
    }
}

function submit() {
    enter();
    createLi()
    newTask();
    addValues();
    resetForm();
}

function checkedbox() {
    for(let x = 0; x < taskList.length; x++){
        let complete = document.getElementsByClassName('complete')[x]  
        if(complete.checked === true) {
            var check = document.getElementsByClassName("ele")[x];
            check.style.setProperty("text-decoration", "line-through");    
        }
        else if(complete.checked === false) {
            var check = document.getElementsByClassName("ele")[x];
            check.style.setProperty("text-decoration", "none");    
        }
    }
}

function removeTask(value) {
    let theTask = taskList[value]
    let toDelete = document.getElementsByClassName('ele')[Number(value)]
    toDelete.parentElement.remove()
    taskList.splice(Number(value),1)
    addValues()
}

function onDragStart(event) {
    event
    .dataTransfer
    .setData('text/plain',event.target.id);
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event
        .dataTransfer
        .getData('text')

    const draggableElement = document.getElementsByClassName(id);
    const dropzone = event.target;

    dropzone.appendChild(draggableElement);

    event
        .dataTransfer
        .clearData();
}