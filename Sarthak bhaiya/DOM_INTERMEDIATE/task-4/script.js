// stories section
const users = [
    {
        username: "Mei_MEi",
        pfp: "https://64.media.tumblr.com/51a18b95073edecb45226833487c653a/a5e8a463cc9842b3-ed/s540x810/28c90ac433d9923c86cc2640d74c4bf3c603c8d9.gifv",
        story: "https://v1.pinimg.com/videos/mc/720p/b3/8b/c0/b38bc024b567dbdbcf86f42f0b01dba7.mp4",
        mediaType: "video"
    },
    {
        username: "Andrew ",
        pfp: "https://img.wattpad.com/5031717c65cc5d8573a77fad2a8d24150730bef8/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5242716f49583932745a50547a513d3d2d313132393832373535392e313661346365613033633566353234323234303635323438383730342e676966",
        story: "https://v1.pinimg.com/videos/mc/720p/b8/84/d0/b884d0b12da13a161b992028a2c2701e.mp4",
        mediaType: "video"
    },
    {
        username: "Itachi",
        pfp: "https://media1.giphy.com/media/ADSJHOoIvyjKM/200w.gif?cid=6c09b952xe68wfiy5lz72gt9tzh5fidq7xnxi3hy94aspv2t&ep=v1_gifs_search&rid=200w.gif&ct=g",
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
(function() {
   
    let header = document.querySelector("header");
    let storyPopup = document.querySelector(".story-popup"); // Use single story-popup modal
    let clutter = '';
    let time = 0;
    
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
     
       let intervalue =  setInterval(function() {
        loadingBar.style.transition = "width 8s linear"; 
        loadingBar.style.width = `${time++}%` ; 
    }, 100); 
    
        setTimeout(function() {
            clearInterval(intervalue)
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
    
})();

// post feature
let post =  [
    {
        "username": "travel_diaries",
        "userlocation": "Paris, France",
        "userprofile": "https://images.unsplash.com/photo-1524638431109-93d95c968f03?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": true,
        "likeCount": 1200,
        "commentCount": 45,
        "shareCount": 30,
        "caption": "Enjoying the sunset at the Eiffel Tower. #ParisVibes #TravelGoals",
        "timeAgoUploaded": 5
    },
    {
        "username": "foodie_lover",
        "userlocation": "Mumbai, India",
        "userprofile": "https://images.unsplash.com/photo-1487069838269-7c05365b400b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://images.unsplash.com/photo-1554978991-33ef7f31d658?q=80&w=2620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": false,
        "likeCount": 530,
        "commentCount": 20,
        "shareCount": 12,
        "caption": "The best vada pav I've ever had! 🌮❤️ #MumbaiStreetFood",
        "timeAgoUploaded": 12
    },
    {
        "username": "fitness_freak",
        "userlocation": "New York, USA",
        "userprofile": "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?q=80&w=3532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": true,
        "likeCount": 800,
        "commentCount": 60,
        "shareCount": 25,
        "caption": "Start your day with some yoga. #FitnessGoals #HealthyLiving",
        "timeAgoUploaded": 24
    },
    {
        "username": "artsy_corner",
        "userlocation": "London, UK",
        "userprofile": "https://images.unsplash.com/photo-1647205552933-12e3dfdb77b5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://plus.unsplash.com/premium_photo-1692650759141-ed71d789ef1b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": true,
        "likeCount": 950,
        "commentCount": 78,
        "shareCount": 40,
        "caption": "New piece in the gallery. Let me know your thoughts! 🎨 #AbstractArt",
        "timeAgoUploaded": 7
    },
    {
        "username": "adventure_seeker",
        "userlocation": "Kyoto, Japan",
        "userprofile": "https://images.unsplash.com/photo-1681562978415-bbf1dfe59353?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": false,
        "likeCount": 600,
        "commentCount": 33,
        "shareCount": 18,
        "caption": "The serenity of Kyoto's bamboo forest. 🌳 #NatureLover",
        "timeAgoUploaded": 18
    }
]
let posts=document.querySelector(".post-section")
let postImg =document.querySelectorAll(".post-image")

function postFun(){
    let clutter =''
    post.forEach(function(value,index){
        clutter +=`  <!-- post -->
             <div class="post">
              <div class="post-header">
                <div class="user-info">
                  <img  class="user-profile-pic" src="${value.userprofile}" alt="">
                 <div class="user">
                  <div class="user-name">${value.username}</div>
                  <div class="post-time">${value.userlocation}</div>
                 </div>

                <div class="options">
                  <i class="ri-more-line"></i>
                </div>
                </div>
              </div>
              <div class="post-image">
                <img id= ${index}  src="${value.userPost}" alt="">
                <i id="heart" class="ri-heart-3-fill"></i>
              </div>
              <div class="like">
                <div class="left">
                  <p id= ${index} > ${value.like ? `<i style="color: #eb0e34db;"  class="ri-heart-3-fill"></i>` : `<i class="ri-heart-3-line"></i>`} <span>${value.likeCount}</span></p>
                <p>   <i class="ri-chat-3-line"></i>
                <span>${value.commentCount}</span></p>
                <p><i class="ri-send-plane-fill"></i>
                <span>${value.shareCount}</span></p>
                </div>
                <div class="right">
                  <i class="ri-bookmark-line"></i>
                </div>
              </div>
<div class="discription">
  <p><span>${value.username}</span> 
  ${value.caption} <span class="more">...more</span>
  </p>
<div class="bottom">
  <span class="more m-x">View all comments</span>
  <span class="more">6 days ago</span>
</div>
</div>
              </div>`
    }
)

    posts.innerHTML = clutter;
};
postFun();
let heart = document.querySelector("#heart")
function likeFeature(){

    posts.addEventListener('click',function(dets){
        // console.log(post[dets.target.id])
            if(!post[dets.target.id].like ===true){
                post[dets.target.id].likeCount++;
                post[dets.target.id].like = true;
                heart.style.transform = `translate(-50% ,-50% ) scale(1)`;
                postFun();
                
            }else{
                heart.style.transform = `translate(-50% ,-50% ) scale(1)`;  
                post[dets.target.id].likeCount--;
                post[dets.target.id].like = false;
                postFun();
            }
        })
}
likeFeature();
