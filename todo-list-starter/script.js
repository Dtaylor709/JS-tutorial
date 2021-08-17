// var todoItems = [
//     {
//         text: "Example",
//         complete: false,
//     },
// ];
let todoTasksText = ['walk Chilli', 'make dinner'];
let todoTasksStatus = [false, true];
updateTodoList();

function addTodoItem() { 
    let newTask = document.getElementById('new-task-text');
    if (newTask.value) {
        todoTasksText.push(newTask.value);
        todoTasksStatus.push(false);
        newTask.value = '';
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
});
}
 

function createNewTodoItemElement(task, index) {
    console.log(task, index);
    //      create a new paragraph element
    let paragraph = document.createElement('p');
    //      set the inner text of the paragraph to the task text
    paragraph.innerText = task;

    if (todoTasksStatus[index] == true) {
        paragraph.classList.add('complete');
    }
    //      create a new list item (<li>) element
    let listItem = document.createElement('li');
    //      add the paragraph tag as a child of the li element
    listItem.appendChild(paragraph);
    console.log(listItem);

    let completeButtonElement = document.createElement('input');
    completeButtonElement.type = 'button';
    completeButtonElement.value = 'completed';
    completeButtonElement.onclick = function () {
        markComplete(index)
    };
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

