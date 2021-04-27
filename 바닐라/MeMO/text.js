const toDoForm=document.querySelector(".js-toDoForm"),
toDoInput=toDoForm.querySelector("input"),
toDoList=document.querySelector(".js-toDoList");

const TODOS_LS="toDos"



let toDos=[];

function deleteTodo(event){
const btn=event.target;
const li=btn.parentNode;
toDoList.removeChild(li);
const cleanToDos=toDos.filter(function(toDo){
return toDo.id !== parseInt(li.id);
});
toDos=cleanToDos;
saveToDos();
}
function ModifyTodo(event){
    const btn=event.target;
    const li-btn.parentNode;
    toDoList.removeChild(li);
    const 
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text){
    const li =document.createElement("li");
    const delBtn=document.createElement("button");
    const Modify=document.createElement("button");
    const span=document.createElement("span");
    const newId=toDos.length +1;
    delBtn.innerText="Delte";
    Modify.innerText="Modify";
    delBtn.addEventListener("click",deleteTodo)
    Modify.addEventListener("click",ModifyTodo)
    span.innerText=text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(Modify);
    li.id=newId;
    toDoList.appendChild(li);

    const toDoObj={
        text:text,
        id:newId
        
    };
    toDos.push(toDoObj);
    saveToDos();

}



function handleSubmit(event){
    event.preventDefault();
    const currentValue=toDoInput.value;
    paintToDo(currentValue);
}

function loadTodOS(){
    const loadedToDos=localStorage.getItem(TODOS_LS);
    if(loadedToDos !==null){
    const parsedToDos=JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo){
        paintToDo(toDo.text);
    })
    }else{

    }
}

function init(){
loadTodOS();
toDoForm.addEventListener("submit",handleSubmit)
}

init();