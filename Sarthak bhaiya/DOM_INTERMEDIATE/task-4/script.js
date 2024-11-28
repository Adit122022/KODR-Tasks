const users = [
    {
        username: "Mei_MEi",
        pfp: "https://i.pinimg.com/736x/f5/be/df/f5bedf73cea46e267ac1c4adada86d62.jpg",
        story: "https://v1.pinimg.com/videos/mc/720p/b3/8b/c0/b38bc024b567dbdbcf86f42f0b01dba7.mp4",
        mediaType: "video"
    },
    {
        username: "Andrew ",
        pfp: "https://i.pinimg.com/736x/37/8d/dd/378ddd8de0059ccaa019296037db5c93.jpg",
        story: "https://v1.pinimg.com/videos/mc/720p/b8/84/d0/b884d0b12da13a161b992028a2c2701e.mp4",
        mediaType: "video"
    },
    {
        username: "Itachi",
        pfp: "https://s3.ezgif.com/tmp/ezgif-3-292727ee2c.gif",
        story: "https://v1.pinimg.com/videos/mc/720p/75/e1/e9/75e1e9878137c00487a245e9b229bbdb.mp4",
         mediaType: "video"

    },
    {
        username: "Kakashi",
        pfp: "https://i.pinimg.com/736x/5b/3b/37/5b3b3714d537daac086c55b9293261a3.jpg",
        story: "https://v1.pinimg.com/videos/mc/720p/3e/68/4f/3e684f8e9c40c659eef98950c85ae1c0.mp4",
         mediaType: "video"
    },
    {
        username: "Hinata",
        pfp: "https://i.pinimg.com/736x/f2/79/c5/f279c5b1fd6a6fade56e878d73e24d40.jpg",
        story: "https://i.pinimg.com/736x/c5/5b/4c/c55b4c6fdef3e9e1ddfcff13aa2b9466.jpg",
         mediaType: "image"
    }
];


let header = document.querySelector("header");
let storyPopup = document.querySelector(".story-popup"); // Use single story-popup modal
let clutter = '';

function stories() {
    users.forEach(function(user, index) {
        clutter += `
            <div class="stories">
              <div class="pfp">
                <img id="${index}" src="${user.pfp}" alt="${user.username}"></div>
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
     
        // Check media type and display the story accordingly
        let mediaContent = '';
        if (selectedUser.mediaType === "video") {
            mediaContent = `
                <video muted loop autoplay>
                    <source src="${selectedUser.story}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
        } else if (selectedUser.mediaType === "image") {
            mediaContent = `<img src="${selectedUser.story}" alt="${selectedUser.username}'s story">`;
        }

        // Display the selected media in the story popup
        storyPopup.innerHTML = `
            <div class="story-content">
            <div class="loading-bar"></div>
                ${mediaContent}
                <button class="close-story">
                    <i class="ri-close-large-line"></i>
                </button>
            </div>
        `;
        storyPopup.style.display = "flex"; // Show the story popup
    }
    const loadingBar = document.querySelector(".loading-bar");
    loadingBar.style.width = "0%";
    setTimeout(function() {
        loadingBar.style.transition = "width 5s linear"; 
        loadingBar.style.width = "100%"; 
    }, 500); 

    setTimeout(function() {
        storyPopup.style.display = "none"; 
    }, 10000); 
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
