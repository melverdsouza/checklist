let inputVal 
let taskList = [];
let id 
id = taskList.length
function enter() {
    if(event.key === 'Enter') {
        inputVal = document.getElementById("take-input").value;
        // alert(inputVal)
        let obj = {}
        taskList.push(obj);
        taskList[taskList.length-1]['text'] = inputVal
        taskList[taskList.length-1]['active'] = true
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
        complete.setAttribute('onclick','checkedbox()')
        // complete.setAttribute('onclick','uncheckedbox()')
        tag.setAttribute('class', 'ele')
        del.setAttribute('class', 'btn')
        del.setAttribute('onclick','removeTask(this.value)')
        // del.setAttribute('name', 'id')
        // del.setAttribute('value', )
        tag.innerHTML = taskList[id]['text'];
        del.innerHTML = 'delete';
        document.getElementsByClassName('task')[id].appendChild(complete)
        document.getElementsByClassName('task')[id].appendChild(tag)
        document.getElementsByClassName('task')[id].appendChild(del)
    }
}

function submit() {
    enter();
    taskWithId()
    newTask();
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

// function removeTask(value) {
//     let theTask = taskList[value]
//     let len = Object.keys(taskList).length
//     for(let x = 0; x < len; x++){
//         if(document.getElementsByClassName('ele')[x].innerText == theTask) {
//             let toDelete = document.getElementsByClassName('ele')[x];
//             toDelete.parentElement.remove()
//             delete taskList[value]
//             break;
//         }
//     }
//     changeId()
// }

// function changeId() {
//     let newLen = Object.keys(taskList).length;
//     let newProp = 1;
//     for(let x = 0; x < newLen; x++) {
//         taskList[newProp] = document.getElementsByClassName('ele')[x].innerText
//         newProp ++
//     }
//     id = newProp
//     delete taskList[newProp]
// }
