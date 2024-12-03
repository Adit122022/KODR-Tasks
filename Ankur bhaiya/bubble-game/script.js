
let mainElement = document.querySelector("main"); 
let targetElement = document.querySelector(".target span"); 
let score = document.querySelector(".Score h1 span"); 
let targetValue = 0;
let setScore = 0;

function setTarget() {
    targetValue = Math.floor(Math.random() * 9 + 1); 
    targetElement.textContent = `${targetValue}`; 
    score.textContent = `${setScore}`; 
}

function populateBubbles() {
    let clutter = '';
    for (let i = 1; i <= 35; i++) {
        let a = Math.floor(Math.random() * 9 + 1); 
        clutter += `<div class="bubble">${a}</div>`;
    }
    mainElement.innerHTML = clutter;
}

function initializeGame() {
    setTarget(); 
    populateBubbles(); 
    
    mainElement.addEventListener('click', function handleClick(dets) {
        if (dets.target.classList.contains('bubble')) {
            let clickedValue = Number(dets.target.textContent); 
            if (clickedValue === targetValue) {
                setScore++;
                // alert("Correct! Generating a new game...");
                initializeGame(); 
            } else {
                alert("Incorrect! Try again.");
                initializeGame(); 
            }
        }
    }, { once: true }); 
}

initializeGame(); 


