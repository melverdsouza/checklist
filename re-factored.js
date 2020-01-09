let id = 1
function enter() {
    if(event.key === 'Enter') {
        inputVal = document.getElementById("take-input").value;
        // alert(inputVal)
        const list = {
            task: inputVal,
            complete: false
        }
        window.localStorage.setItem(id, JSON.stringify(list));
        id++
    }
}

function resetForm() {
    if(event.key === 'Enter') {
        document.getElementById("take-input").value = '';
        document.location.reload();
    }
}

function submit() {
    enter()
    resetForm();
    
}

// function createLi() {
//     if(event.key === 'Enter') {
//         let fullTag = document.createElement('li');
//         fullTag.setAttribute('class', 'task');
//         fullTag.setAttribute('draggable', 'true')
//         fullTag.setAttribute('ondragstart', 'onDragStart(event)')
//         fullTag.setAttribute('ondragover', 'onDragOver(event)')
//         fullTag.setAttribute('ondrop', 'onDrop(event)')
//         document.getElementById('taskList').appendChild(fullTag);
//     }
// }

// function newTask() {
//     if(event.key === 'Enter') {
//         let complete = document.createElement('input')
//         let tag = document.createElement('p');
//         let del = document.createElement('button');
//         complete.setAttribute('type', 'checkbox')
//         complete.setAttribute('class', 'complete')
//         complete.setAttribute('onclick','checkedbox()')
//         // complete.setAttribute('onclick','uncheckedbox()')
//         tag.setAttribute('class', 'ele')
//         del.setAttribute('class', 'btn')
//         del.setAttribute('onclick','removeTask(this.value)')
//         // del.setAttribute('name', 'id')
//         // del.setAttribute('value', )
//         tag.innerHTML = taskList[taskList.length-1]['text'];
//         del.innerHTML = 'delete';
//         document.getElementsByClassName('task')[taskList.length-1].appendChild(complete)
//         document.getElementsByClassName('task')[taskList.length-1].appendChild(tag)
//         document.getElementsByClassName('task')[taskList.length-1].appendChild(del)
//     }
// }

// function addValues() {
//     for(let i = 0; i < taskList.length; i++) {
//         document.getElementsByClassName('btn')[i].setAttribute('value', i)
//     }
// }

function createTasks() {
    for (var i = 1; i <= localStorage.length; i++){
        // do something with localStorage.getItem(localStorage.key(i));
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
                tag.innerHTML = JSON.parse(window.localStorage.getItem(i))['task'];
                del.innerHTML = 'delete';
                document.getElementsByClassName('task')[i-1].appendChild(complete)
                document.getElementsByClassName('task')[i-1].appendChild(tag)
                document.getElementsByClassName('task')[i-1].appendChild(del)
            }
        }
        
        // function addValues() {
        //     for(let i = 0; i < taskList.length; i++) {
        //         document.getElementsByClassName('btn')[i].setAttribute('value', i)
        //     }
        // }
        createLi();
        newTask(); 
    }
}