// first task 
function first(){
    let child = document.querySelectorAll(".child");


child.forEach(function(element) {
// console.log(element.children[2])
element.addEventListener("mouseenter", function() {
 element.children[2].style.opacity =1
})
element.addEventListener("mouseleave", function() {
    element.children[2].style.opacity =0 
})
element.addEventListener("mousemove", function(e) {
//    console.log(child)
let x = e.clientX 
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

let arr =[
    {src : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-png%2Finsect&psig=AOvVaw1b6Qpxbmo3URk-7vlkBf0q&ust=1733237665816000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLC009mriYoDFQAAAAAdAAAAABAE" },
    { src : "https://img.freepik.com/premium-psd/fly-isolated-transparent-background-fly-insect-png-generative-ai_667511-5973.jpg"},
    { src : ""}
]
function third(){
   let part3 = document.querySelector("#part3");
let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function(){
// console.log(Math.random()*100 )
    // console.log("part3 clicked")
    let img = document.createElement('img')
    img.src = "https://i.pinimg.com/736x/28/44/08/284408f78e8dc2511b32524a93155d6d.jpg"
    img.style.width = "100px"
    img.style.position = "absolute"
    img.style.left = Math.random()*1000 +'px'
    img.style.top = Math.random()*1000 +'px'
    img.style.rotate = Math.random()*360 +'deg'

    part3.appendChild(img)
});   
}
third();
