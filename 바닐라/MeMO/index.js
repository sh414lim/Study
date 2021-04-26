const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  pending = form.querySelector("js-pendingList");

const TODO = "todos";

let toDos = [];

const handleDelete = (event) => {
  const buton = event.target;
  const li = buton.parentNode;
  pending.removeChild(li);
  const cleanlist = toDos.filter(function (todo) {
    return todo.id !== parseInt(li.id);
  });
  toDos = cleanlist;
  saveToDos();
};

function saveToDos(){
    localStorage.setItem(TODOS,JSON.stringify(toDos));
}

function pendingList(text) {
  const li = document.createElement("li");
  const del = document.createElement("button");
  const Modify = document.createElement("button");
  const span = document.createElement("span");
  const newId=toDos.length +1;

  del.innerText = "Delete";
  del.addEventListener("click", handleDelete);

  Modify.innerText = "Modify";
  span.innerText = text;

  li.appendChild(del);
  li.appendChild(span);

  li.id=newId;
  pending.appendChild(li);

  const Obj={
      text:text,
      id:newId
  }
  toDos.push(Obj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  pendingList(currentValue);
}

function loadPending() {
  const loaded = localStorage.getItem(TODO);
  if (loaded !== null) {
    const parseToDo = JSON.parse(loadPending);
    parseToDo.forEach(function (todo) {
      pendingList(todo.text);
    });
  } else {
  }
}

function init() {
  loadPending();
  form.addEventListener("submit", handleSubmit);
}
init();
