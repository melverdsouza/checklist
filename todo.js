function enter() {
    if(event.key === 'Enter') {
        var inputVal = document.getElementById("take-input").value;
        alert(inputVal)
    }
}

function resetForm() {
    if(event.key === 'Enter') {
        document.getElementById("take-input").value = '';
    }
}

function submit() {
    enter();
    resetForm();
}