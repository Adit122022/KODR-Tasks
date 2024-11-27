const users = [
    {
        username: "Hinata",
        pfp: "https://img.freepik.com/free-vector/gradient-anime-people-walking-down-street_52683-71238.jpg?t=st=1732726142~exp=1732729742~hmac=791459635c0900627729b1d64b1ebeee59545374afcdc48cfef2ab5e886a04e0&w=740",
        story: "https://img.freepik.com/free-vector/gradient-anime-people-walking-down-street_52683-71238.jpg?t=st=1732726142~exp=1732729742~hmac=791459635c0900627729b1d64b1ebeee59545374afcdc48cfef2ab5e886a04e0&w=740"
    }
];

let header = document.querySelector("header");
let storyPopup = document.querySelector(".story-popup"); // Use single story-popup modal
let clutter = '';

function stories() {
    users.forEach(function(user, index) {
        clutter += `
            <div class="stories">
                <img id="${index}" src="${user.pfp}" alt="${user.username}">
                <p>${user.username}</p>
            </div>
        `;
    });

    header.innerHTML = clutter;
}

stories();

header.addEventListener('click', function(e) {
    if (e.target.tagName === "IMG") {
        const selectedUser = users[e.target.id];
        storyPopup.innerHTML = `
            <div class="story-content">
            <div class="loading-bar"> </div>
                <img src="${selectedUser.story}" alt="${selectedUser.username}'s story">
                <button class="close-story">
                <i class="ri-close-large-line"></i></button>
            </div>
        `;
        storyPopup.style.display = "flex"; 
    }
    const loadingBar = document.querySelector(".loading-bar");
    loadingBar.style.width = "0%";
    setTimeout(function() {
        loadingBar.style.transition = "width 5s linear"; 
        loadingBar.style.width = "100%"; 
    }, 100); 

    setTimeout(function() {
        storyPopup.style.display = "none"; 
    }, 5000); 
});

// Close the story popup when the close button is clicked
storyPopup.addEventListener('click', function(e) {
  
    if (e.target.classList.contains("close-story")) {
        storyPopup.style.display = "none"; // Hide the story popup
    }
    else{
        storyPopup.style.display = "none"; // Hide the story popup
    }
});
