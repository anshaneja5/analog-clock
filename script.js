const hours= document.querySelector("[data-hours]");
const minutes= document.querySelector("[data-minutes]");
const seconds= document.querySelector("[data-seconds]");

setInterval(setClock,1000);

function setClock(){
    const currentDate=new Date();
    const secondsRatio=currentDate.getSeconds()/60;
    const minutesRatio=(secondsRatio+currentDate.getMinutes())/60;
    const hoursRatio=(minutesRatio +currentDate.getHours())/12;

    setRotation(hours,hoursRatio);
    setRotation(minutes,minutesRatio);
    setRotation(seconds,secondsRatio);
}


function setRotation(element,ratio){
    element.style.setProperty("--rotation",ratio*360);
}

setClock()
