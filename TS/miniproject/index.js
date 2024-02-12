function loadTodos() {
    var todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
var btn = document.getElementById("btn");
var input = document.getElementById("todoinput");
var form = document.querySelector("form");
var toDoList = document.getElementById("todolist");
var todos = loadTodos();
todos.forEach(createNewTodo);
function handleSubmit(e) {
    e.preventDefault();
    var newTodo = {
        text: input.value,
        completed: false,
    };
    todos.push(newTodo);
    createNewTodo(newTodo);
    saveTodos();
    input.value = "";
}
function createNewTodo(todo) {
    var newLi = document.createElement("LI");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLi.append(todo.text);
    newLi.append(checkbox);
    toDoList === null || toDoList === void 0 ? void 0 : toDoList.append(newLi);
}
form.addEventListener("submit", handleSubmit);
