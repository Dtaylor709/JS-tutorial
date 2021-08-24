// var todoItems = [
//     {
//         text: "Example",
//         complete: false,
//     },
// ];
let todoTasksText = [];
let todoTasksStatus = [];
let todoDates = [];
let important = [];
updateTodoList();



function addTodoItem() { 
    let newTask = document.getElementById('new-task-text');
    let newDate = document.getElementById('new-task-date');
    if (newTask.value && newDate.value) {
        todoTasksText.push(newTask.value);
        todoTasksStatus.push(false);
        todoDates.push(newDate.value)
        newTask.value = '';
        newDate.value = '';
    }
    updateTodoList();
}

function updateTodoList() {
    // get the todo-list element from the page
    let todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = '';

// for each task in the todoTasksText list:
    todoTasksText.forEach((task, index) => {
    let newTodoItemElement = createNewTodoItemElement(task, index);
    todoListElement.appendChild(newTodoItemElement);
    console.log(document.querySelectorAll("li"))
});
}
 

function createNewTodoItemElement(task, index) {
    console.log(task, index);
    //      create a new paragraph element
    let paragraph = document.createElement('p');
    //      set the inner text of the paragraph to the task text
    paragraph.innerText = task;
  
    //      create a new list item (<li>) element
    let listItem = document.createElement('li');
    if (todoTasksStatus[index] == true) {
        listItem.classList.add('complete');
    }
    else {
        listItem.classList.add('incomplete')
    }
    //      add the paragraph tag as a child of the li element
    listItem.appendChild(paragraph);
    console.log(listItem);

    let up = document.createElement('input');
    up.type = 'button';
    up.value = 'UP';
    up.id = task;
    

    up.onclick = function () {
        console.log(document.getElementById(task).parentElement);
        console.log(task);
//         get position of clicked item
//         var idx = todoTasksText.indexOf(element);
        todoTasksText.indexOf(task);
// // figure out position of previous item (will be clicked position - 1)
        let taskPosition = todoTasksText.indexOf(task);
        let abovePosition = taskPosition - 1;

// // swap the items
        var b = todoTasksText[taskPosition];
        todoTasksText[taskPosition] = todoTasksText[abovePosition];
        todoTasksText[abovePosition] = b;
    // update the screen
        updateTodoList();
    }
    listItem.appendChild(up)
    
    let completeButtonElement = document.createElement('input');
    completeButtonElement.type = 'button';
    completeButtonElement.value = 'completed';
    completeButtonElement.onclick = function () {
        markComplete(index)
    };
    let importantButtonElement = document.createElement('input');
    importantButtonElement.type = 'button';
    importantButtonElement.value = 'important';
    importantButtonElement.onclick = function () {
        markImportant(index)
    }
    listItem.appendChild(importantButtonElement)

    if (important[index] == true) {
        let importantPic = document.createElement('img')
        importantPic.src = 'https://img.resized.co/entertainment/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvczMtZXUtd2VzdC0xLmFtYXpvbmF3cy5jb21cXFwvZW50ZXJ0YWlubWVudGllXFxcL3N0b3JhZ2VcXFwvaW1hZ2VzX2NvbnRlbnRcXFwvcmVjdGFuZ2xlXFxcLzYyMHgzNzJcXFwvU2NyZWVuLVNob3QtMjAxNi0wOS0xMC1hdC0xNzU5MzgucG5nXCIsXCJ3aWR0aFwiOjEyMDAsXCJoZWlnaHRcIjo2MzAsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL2VudGVydGFpbm1lbnQuaWVcXFwvaW1hZ2VzXFxcL25vLWltYWdlLnBuZ1wifSIsImhhc2giOiJkYjJjMWVlNmI1ZDIyYzRjZGE4ZTQ5MDk4ODZiYWMxZjZlNmNiNzRkIn0=/pic-this-picture-of-terry-crews-can-help-save-you-money.png'
        listItem.appendChild(importantPic)
    }
    
    let dateElement = document.createElement('p');
    dateElement.innerText = todoDates[index];
    listItem.appendChild(dateElement);
    
    listItem.appendChild(completeButtonElement);


    return listItem
}

function markComplete(index) {
    if (todoTasksStatus[index] == false) {
        todoTasksStatus[index] = true;
    } else {
        todoTasksStatus[index] = false;
    }
    console.log(todoTasksStatus);
    updateTodoList();
}


function markImportant(index) {
    if (important[index] == false) {
        important[index] = true;
    } else {
        important[index] = false;
    }
    console.log(important);
    updateTodoList();
}

