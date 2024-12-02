// first task
function first() {
  let child = document.querySelectorAll(".child");

  child.forEach(function (element) {
    // console.log(element.children[2])
    element.addEventListener("mouseenter", function () {
      element.children[2].style.opacity = 1;
    });
    element.addEventListener("mouseleave", function () {
      element.children[2].style.opacity = 0;
    });
    element.addEventListener("mousemove", function (e) {
      //    console.log(child)
      let x = e.clientX;
      element.children[2].style.left = x + "px";
      element.children[2].style.top = "50%";
      element.children[2].style.opacity = "1";
      element.children[2].style.transform = "translate(-50% ,-50%)";
    });
  });
}
first();

// second task
function second() {
  let img1 = document.querySelector("#image1");
  let img2 = document.querySelector("#image2");
  document.querySelector("#btn").addEventListener("click", function () {
    let src1 = img1.getAttribute("src");
    let src2 = img2.getAttribute("src");
    img1.setAttribute("src", src2);
    img2.setAttribute("src", src1);
  });
}
second();

// third task
var arr = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6B-Oa7Lx5wGIR0lAXFF6ipCbb025x8-e0sg&s",
  },
  {
    src: "https://i.pinimg.com/474x/eb/06/00/eb0600f993982b7934ed132e6e8a9baf.jpg",
  },
  {
    src: "https://i.pinimg.com/736x/92/b3/0a/92b30a82293dbcbcb6fe71b09ddb0752.jpg",
  },
  {
    src: "https://i.pinimg.com/736x/cb/7d/56/cb7d567a96e322f05ac367c5c6d5bf93.jpg",
  },
  {
    src: "https://i.pinimg.com/736x/c4/cf/59/c4cf5957a397749d737c20d923a28da5.jpg",
  },
];

function third() {
  let part3 = document.querySelector("#part3");
  let btn3 = document.querySelector("#btn3");

  btn3.addEventListener("click", function () {
    console.log("Button clicked!");
    let randomWinner = arr[Math.floor(Math.random() * arr.length)].src;
    let img = document.createElement("img");
    img.src = randomWinner;
    img.style.width = "100px";
    img.style.position = "absolute";
    img.style.left = Math.random() * 1000 + "px";
    img.style.top = Math.random() * 500 + "px";
    img.style.transform = `rotate(${Math.random() * 360}deg)`;
    part3.appendChild(img);
  });
}

third();
