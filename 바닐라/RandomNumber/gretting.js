const form= document.querySelector(".js-form"),
input=form.querySelector("input"),
greeting=document.querySelector(".js-greetings");

const LOCAL_US="currentUser";
const SHOW_LS="showing";

function saveName(text){
  localStorage.setItem(LOCAL_US,text)
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue=input.value;
  paintGreeting(currentValue);
  saveName(currentValue)

}

function askForName(){
  form.classList.add(SHOW_LS);
  form.addEventListener("submit" ,handleSubmit);
}

function paintGreeting(text){
form.classList.remove(SHOW_LS);
greeting.classList.add(SHOW_LS);
greeting.innerText=`Hello ${text}`
}


function loadName(){
  const currentUser=localStorage.getItem(LOCAL_US)
  if(currentUser === null){
    askForName();
  }else{
    paintGreeting(currentUser);
  }
}

function init(){
  loadName();
}

init()