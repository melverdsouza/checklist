let inputVal 
let id = 1
let taskList = {};
function enter() {
    if(event.key === 'Enter') {
        inputVal = document.getElementById("take-input").value;
        // alert(inputVal)
        taskList[id] = inputVal;
        id = id + 1;
    }
}

function resetForm() {
    if(event.key === 'Enter') {
        document.getElementById("take-input").value = '';
    }
}
function taskWithId() {
    if(event.key === 'Enter') {
        let fullTag = document.createElement('li');
        fullTag.setAttribute('class', 'task');
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
        tag.setAttribute('class', 'ele')
        del.setAttribute('class', 'btn')
        tag.innerHTML = taskList[id-1];
        del.innerHTML = 'delete';
        document.getElementsByClassName('task')[0].appendChild(complete)
        document.getElementsByClassName('task')[0].appendChild(tag)
        document.getElementsByClassName('task')[0].appendChild(del)        
    }
}

function submit() {
    enter();
    taskWithId()
    newTask();
    resetForm();
}

