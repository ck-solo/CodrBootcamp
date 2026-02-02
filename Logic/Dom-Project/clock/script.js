let secondhands = document.querySelector(".seconds")
const hourhands = document.querySelector(".hours")
const minutehands = document.querySelector(".minutes")
 

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegree = (((seconds / 60) * 360) + 90)
    secondhands.style.transform = `rotate(${secondDegree}deg)`

    const minutes = now.getMinutes();
    const minutesdegree = (((minutes / 60) * 360) + 90)
    minutehands.style.transform = `rotate(${minutesdegree}deg)`

    const hours = now.getHours(); 
    const hoursdegree = (((hours / 12) * 360) +  90);

    hourhands.style.transform = `rotate(${hoursdegree}deg)`
    
}
console.log("Hello")

setInterval( setDate, 1000);

setDate()