const users = [
    {
        username: "Anime_girl",
        pfp: "https://storage.googleapis.com/fc-freepik-pro-rev1-europe-west1-reimagine-ai/reimagine/157361/157361743/129891109/725c2306-0d14-4ac1-8774-4da3be05daf0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=reimagine-ai-sa%40fc-freepik-pro-rev1.iam.gserviceaccount.com%2F20241127%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241127T181632Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=135ba2267b55d257c9ad028e6f69a0ffc14a05e36b2476c2ee5c51326a2b7421422c358f9a840d3f4347293f78a1852056ed0d6c1410528f55ef3adc69fd638cf81f4a3d9072d87d73b019c46a9260694898ce3c7fe7cc9dc010241e3ea80accb30f68fad776c32b19a0b4c1839ee01ea16767c800a9ca51bbe145afad4ec73635c473332dfd9bb46980bce6a34e729c81709622fe4c119335fc5841aa8407f61cb69cdd127667883c7bba9615b155ccfd45cfc272e2d747498d115221062eab7200bfe163413c8c020ef6c72de124c4eacc3e45f00d29b888b1ec32d50da455816e9111e34aa9b0e98c15637a2704dfe7c2f83f8e1d7e9928b9647f71e2a4aa",
        story: "https://img.freepik.com/free-photo/comic-book-lifestyle-scene-illustration_23-2151133715.jpg?t=st=1732731301~exp=1732734901~hmac=277eee8d1b616be981b080fdcc8a8c68cfa9763419e072ba888dcb01a3f3dd74&w=360"
    },
    {
        username: "Naruto",
        pfp: "https://img.freepik.com/free-vector/gradient-anime-character-standing-in-crowd_52683-71237.jpg?t=st=1732726142~exp=1732729742~hmac=791459635c0900627729b1d64b1ebeee59545374afcdc48cfef2ab5e886a04e0&w=740",
        story: "https://img.freepik.com/free-vector/gradient-anime-character-standing-in-crowd_52683-71237.jpg?t=st=1732726142~exp=1732729742~hmac=791459635c0900627729b1d64b1ebeee59545374afcdc48cfef2ab5e886a04e0&w=740"
    },
    {
        username: "Sakura",
        pfp: "https://img.freepik.com/free-vector/gradient-anime-character-with-flowers_52683-71236.jpg?t=st=1732726142~exp=1732729742~hmac=791459635c0900627729b1d64b1ebeee59545374afcdc48cfef2ab5e886a04e0&w=740",
        story: "https://img.freepik.com/free-vector/gradient-anime-character-with-flowers_52683-71236.jpg?t=st=1732726142~exp=1732729742~hmac=791459635c0900627729b1d64b1ebeee59545374afcdc48cfef2ab5e886a04e0&w=740"
    },
    {
        username: "Kakashi",
        pfp: "https://img.freepik.com/free-vector/gradient-anime-character-reading-book_52683-71235.jpg?t=st=1732726142~exp=1732729742~hmac=791459635c0900627729b1d64b1ebeee59545374afcdc48cfef2ab5e886a04e0&w=740",
        story: "https://img.freepik.com/free-vector/gradient-anime-character-reading-book_52683-71235.jpg?t=st=1732726142~exp=1732729742~hmac=791459635c0900627729b1d64b1ebeee59545374afcdc48cfef2ab5e886a04e0&w=740"
    },
    {
        username: "Sasuke",
        pfp: "https://img.freepik.com/free-photo/full-shot-ninja-wearing-equipment_23-2150960928.jpg?t=st=1732731120~exp=1732734720~hmac=53b355372413ae65868d3dbb9007288e77e1e89e227240438901b95fbf40df12&w=996",
        story: "https://img.freepik.com/free-vector/gradient-anime-character-standing-in-dark_52683-71234.jpg?t=st=1732726142~exp=1732729742~hmac=791459635c0900627729b1d64b1ebeee59545374afcdc48cfef2ab5e886a04e0&w=740"
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
