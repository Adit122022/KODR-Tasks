const btn = document.querySelector(".btn")
const bulb = document.querySelector("#bulb")
let flage =0;
btn.addEventListener("click",()=>{
    if(flage===0){
        bulb.style.backgroundColor = "yellow";
        btn.style.backgroundColor = "royalblue"
        btn.style.color="white"
        btn.textContent = " lattu bhuja de"
        flage=1;
    }
    else{
        bulb.style.backgroundColor = "white";
         btn.style.backgroundColor = "lightblue"
        btn.style.color="black"
        btn.textContent = " lattu jala de"
        flage=0;
    }
})