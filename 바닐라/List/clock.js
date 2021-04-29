const clockContainer=document.querySelector(".js-clock"),
time=document.querySelector("h1")


function getTime(){
    const date=new Date();
    const hour=date.getHours();
    const minutes=date.getMinutes();
    const second=date.getSeconds();

time.innerText=`${hour < 10 ? `0${hour}` : hour} : ${minutes < 10 ? `0${minutes}` :minutes} : ${second < 10 ? `0${second}` : second}`

}
    


function init(){
    getTime();
setInterval(getTime,1000)

}

init();





