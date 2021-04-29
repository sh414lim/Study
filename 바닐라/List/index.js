const userForm=document.querySelector(".js-form"),
userInput=document.querySelector("input"),
gretting=document.querySelector(".js-greetings");

const USER_LS="currentUser"
const SHOW="showing";

function saveUser(text){
  localStorage.setItem(USER_LS,text)
}

const handleaSubmit=(event)=>{
  event.preventDefault()
  const currentValue=userInput.value;
  printUser(currentValue);
  saveUser(currentValue);

}

function askUser(){
  userForm.classList.add(SHOW);
  userForm.addEventListener("submit",handleaSubmit);

}



function printUser(text){
  userForm.classList.remove(SHOW);
  gretting.classList.add(SHOW);
  gretting.innerText=`Welcome ${text}`
}

function loadUser(){
  const currentUser=localStorage.getItem(USER_LS);
  if(currentUser === null){
    askUser();
  }else{
    printUser(currentUser);

  }
}

loadUser();