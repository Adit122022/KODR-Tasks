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
let x = e.clientX 
let y = e.clientY 
element.children[2].style.left = x + "px";
element.children[2].style.top = "50%";
element.children[2].style.opacity =  "1";
element.children[2].style.transform = "translate(-50% ,-50%)";
})

});

