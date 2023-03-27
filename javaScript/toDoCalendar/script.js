//Selectors

const toDo = document.querySelector('.toDo');
const toDoBtn = document.querySelector('.toDoBtn');
const toDoList = document.querySelector('.toDoList');

//Event listeners

toDoBtn.addEventListener("click", addToDo);
toDoList.addEventListener("click", deleteCheck)
   

//Functions

function addToDo(event) {   
    // Prevent form from submitting
    event.preventDefault();
    // Create to-do div
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("toDo");
    // Create to-do li
    const newTodo = document.createElement("li");
    newTodo.innerText = toDo.value;
    newTodo.classList.add("toDoItem");
    toDoDiv.appendChild(newTodo);
    // Completed button
    const completedBtn = document.createElement("button");
    completedBtn.innerHTML = '<i class ="fas fa-check"></i>';
    completedBtn.classList.add("completedBtn");
    toDoDiv.appendChild(completedBtn);
    // Trash button
    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add("trashBtn");
    toDoDiv.appendChild(trashBtn);
    // Append to list
    toDoList.appendChild(toDoDiv);
    // Clear todo input value
    toDo.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    // Delete to-do
    if (item.classList[0] === "trashBtn") {
        const toDo = item.parentElement;
        // Animation
        toDo.classList.add("fall")
        toDo.addEventListener("transitionend", function() {
        toDo.remove();
        });
}
    
    // Check-mark
    if (item.classList[0] === "completedBtn") {
        const toDo = item.parentElement;
        toDo.classList.toggle("completed");
    }

}




/* function saveLocalToDo(toDo){
    //Does previuos localStorage exist?
    let toDoList;
    if(localStorage.getItem("toDoList") === null) {
        todoList = [];
    } else {
        todoList = JSON.parse(localStorage.getItem("toDoList"))
     }
     toDoList.push(toDo);
     localStorage.setItem("toDoList", JSON.stringify("todoList"));
}
[]*/