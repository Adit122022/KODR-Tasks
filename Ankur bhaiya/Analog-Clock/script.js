
let minuts = document.querySelector(".minuts")
let hours = document.querySelector(".hours")
// alert('hello world')
let seconds = document.querySelector(".hands .seconds")


setInterval(function() {
    let date = new Date()
    let getSeconds = date.getSeconds()
    let getMinutes = date.getMinutes()
    let getHours = date.getHours() 
    getHours = (getHours % 12);
    console.log(getHours)
    seconds.style.transform = `rotate(${getSeconds * 6}deg) translate(-30%)`
    minuts.style.transform = `rotate(${getMinutes * 6}deg) translate(-40%)`
    hours.style.transform = `rotate(${(getHours* 30) + (getMinutes / 60) *30}deg) translate(-40%)`
}, 1000)
