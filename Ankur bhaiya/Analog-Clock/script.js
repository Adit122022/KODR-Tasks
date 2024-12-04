
let minuts = document.querySelector(".minuts")
let hours = document.querySelector(".hours")
// alert('hello world')
let seconds = document.querySelector(".hands .seconds")


setInterval(function() {
    let date = new Date()
    let getSeconds = date.getSeconds()
    let getMinutes = date.getMinutes()
    let getHours = date.getHours()
    console.log(getSeconds)
    seconds.style.transform = `rotate(${getSeconds * 6}deg) translate(-50%)`
    minuts.style.transform = `rotate(${getMinutes * 6}deg) translate(-50%)`
    hours.style.transform = `rotate(${getHours * 6}deg) translate(-50%)`
}, 1000)
