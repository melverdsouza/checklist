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

function newTask() {
    if(event.key === 'Enter') {
            let tag = document.createElement('p');
            tag.innerHTML = taskList[id-1];
            document.getElementById('task').appendChild(tag)
    }
}

function submit() {
    enter();
    newTask();
    resetForm();
}

