const TodoForm=document.querySelector(".js-toDoForm"),
toDoinput=TodoForm.querySelector("input"),
toDoList=document.querySelector(".js-toDoList");

const TODO_LS="toDos"

const toDos=[];

function fillFn(toDo){
return toDo.id ===1
}

function deleteToDo(event){
    const btn=event.target;
    const li= btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos=toDos.filter(fillFn)
    console.log(cleanToDos);

    
}

function savename(){
    localStorage.setItem(TODO_LS,JSON.stringify(toDos))
}

function paintName(text){
    const li=document.createElement("li");
    const dleBtn=document.createElement("button");
    const span=document.createElement("span");
    const newId=toDos.length+1;
    dleBtn.innerText="Delite";
    dleBtn.addEventListener("click",deleteToDo);
    span.innerText=text;
    li.id=newId;
    li.appendChild(dleBtn);
    li.appendChild(span)
    toDoList.appendChild(li);

    const ListObj={
        text:text,
        id:newId
    }

    toDos.push(ListObj)
    savename();
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue=toDoinput.value;
    paintName(currentValue);
    toDoinput.value=" ";
    
}

function loadname(){
    const loadedToDos=localStorage.getItem(TODO_LS);
    if(loadedToDos !== null){
        const paresedTodos=JSON.parse(loadedToDos);
        paresedTodos.forEach(function(toDO){
            paintName(toDO.text)
        })

    }else{

    }
}

function init(){
    loadname();
    TodoForm.addEventListener("submit",handleSubmit);
}

init();