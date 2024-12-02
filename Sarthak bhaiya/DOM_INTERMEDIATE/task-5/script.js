// first task 
function first(){
    let child = document.querySelectorAll(".child");


child.forEach(function(element) {
// console.log(element.children[2])
element.addEventListener("mouseenter", function(e) {
 element.children[2].style.opacity =1
})
element.addEventListener("mouseleave", function(e) {
    element.children[2].style.opacity =0 
})
element.addEventListener("mousemove", function(e) {
   console.log(child)
let x = e.clientX -40
let y = e.clientY -40
element.children[2].style.left = x + "px";
element.children[2].style.top = "50%";
element.children[2].style.opacity =  "1";
element.children[2].style.transform = "translate(-50% ,-50%)";
})

});
}
first()

// second task
function second(){
    let img1 =document.querySelector("#image1")
let img2 =document.querySelector("#image2")
document.querySelector("#btn").addEventListener("click", function(){
    let src1 = img1.getAttribute("src")
    let src2 = img2.getAttribute("src")
    img1.setAttribute("src", src2)
    img2.setAttribute("src", src1)
})
}
second()

// third task

function third(){
   let part3 = document.querySelector("#part3");
let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function(){

    console.log("part3 clicked")
    let img = document.createElement('img')
    img.src = "https://i.pinimg.com/736x/28/44/08/284408f78e8dc2511b32524a93155d6d.jpg"
    img.style.width = "200px"
    img.style.position = "absolute"
    img.style.top = Math.random()*100 +'px'
    part3.appendChild(img)
});   
}
third();
