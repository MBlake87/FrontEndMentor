interface Todo {
  text: string;
  completed: boolean;
}

function loadTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const toDoList = document.getElementById("todolist");

const todos: Todo[] = loadTodos();
todos.forEach(createNewTodo);

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  todos.push(newTodo);
  createNewTodo(newTodo);
  saveTodos();
  input.value = "";
}

function createNewTodo(todo: Todo) {
  const newLi = document.createElement("LI");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", function () {
    todo.completed = checkbox.checked;
    saveTodos();
  });
  newLi.append(todo.text);
  newLi.append(checkbox);
  toDoList?.append(newLi);
}

form.addEventListener("submit", handleSubmit);
