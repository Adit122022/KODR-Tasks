const users = [
    {
      name: "Sneha Sharma",
      age: 27,
      city: "Mumbai",
      isFriend: false,
      Status: "Stranger",
      img: "https://images.unsplash.com/photo-1732530361158-09f4154b6b3b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Priya Mehta",
      age: 24,
      city: "Delhi",
      isFriend: false,
      Status: "Stranger",
      img: "https://images.unsplash.com/photo-1689488321084-a7f165c19fa7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Riya Gupta",
      age: 30,
      city: "Bangalore",
      isFriend: false,
      Status: "Stranger",
      img: "https://images.unsplash.com/photo-1728029082655-3e8b283eeb9e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Ananya Iyer",
      age: 22,
      city: "Chennai",
      isFriend: false,
      Status: "Stranger",
      img: "https://images.unsplash.com/photo-1728029082655-3e8b283eeb9e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Kabir Singh",
      age: 28,
      city: "Hyderabad",
      isFriend: false,
      Status: "Stranger",
      img: "https://images.unsplash.com/photo-1728029082655-3e8b283eeb9e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Simran Kaur",
      age: 26,
      city: "Amritsar",
      isFriend: false,
      Status: "Stranger",
      img: "https://images.unsplash.com/photo-1728029082655-3e8b283eeb9e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  let parent = document.querySelector('#parent')
function main(){
  
  let clutter =''
  users.forEach(function(value,index){
    clutter += `<div class="card">
        <img src="${value.img}" alt="" />
        <div class="flex">
          <h2>${value.name}</h2>
          <h5>${value.age}, ${value.city}</h5>
        </div>
       <div class ="flex">
        <h4 class="${value.Status}">${value.Status}</h4>
    ${value.isFriend ? `<button id="${index}">Remove Friend</button>` : `<button id="${index}">Add Friend</button>`}
        </div>
      </div>`
   parent.innerHTML = clutter;
  })
}

main()
parent.addEventListener('click', function(e){
if( users[e.target.id].Status == "Stranger"){
  users[e.target.id].Status = "Friends"
  users[e.target.id].isFriend = true
  main()
}
else{
  users[e.target.id].Status = "Stranger"
  users[e.target.id].isFriend = false
  main()
}
 

})

  