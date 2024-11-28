let progress =document.querySelector(".progress")
let p =document.querySelector("p")
let btn =document.querySelector("button")
let grow = 0

btn.addEventListener("click",function(){
    
   let bar = setInterval(function(){
        grow++;
        progress.style.width = grow +"%"
       p.textContent = grow +'%'
        // if(grow >= 100){
        //     clearInterval(bar)
        //     p.textContent = "100%"
        // progress.style.width = "100%"
        // btn.style.pointerEvents = "none"
        // btn.style.background = "none"
        // }
   },30)
    setTimeout(function(){
        clearInterval(bar)
        p.textContent = "100%"
        progress.style.width = "100%"
        btn.style.pointerEvents = "none"
        btn.style.background = "none"

    },3000)
   

})
