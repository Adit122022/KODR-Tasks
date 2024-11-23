const images =document.querySelectorAll(".gallery img");
const img =document.querySelector(".modal img");
let modal =document.querySelector(".modal")
images.forEach(function (image) {
    image.addEventListener("click", function () {
        img.src = image.src;
        modal.style.display = "flex";
    });
   modal.addEventListener("click", function () {
        modal.style.display = "none";
    });
})