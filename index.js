const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const userImg = document.querySelector("#user-img"); //posts[].avatar
const userName = document.querySelector("#user-name"); // posts[].name
const userLocation = document.querySelector("#user-location"); //posts[].location
const userPost = document.querySelector("#user-post"); // posts[].post
const likeCount = document.querySelector("#like-count"); // posts[].likes
const commentName = document.querySelector("#comment-name"); // posts[].username
const comment = document.querySelector("#post-comments"); // posts[].comment
const pageContent = document.querySelector("main");
const likeIcon = document.querySelector(".icon like-icon");




function renderSite(){
    for(i = 0; i < posts.length; i ++){
        pageContent.innerHTML += `
        <section class="post-content">
                <div class="user-info">
                    <div>
                        <img id="user-img" src="${posts[i].avatar}" alt="Profil Picture of the Account that posted the content">
                    </div>
                    <div>
                    <p id="user-name">${posts[i].name}</p>
                    <p id="user-location">${posts[i].location}</p>
                    </div>

                </div>
                <div class="post-img">
                    <img id="user-post" src="${posts[i].post}" alt="Content of the Oldagram post">
                </div>
                <div class="post-body">
                    <img class="icon like-icon" src="images/icon-heart.png" alt="Like-Icon">
                    <img class="icon" src="images/icon-comment.png" alt="Comment-Icon">
                    <img class="icon" src="images/icon-dm.png" alt="Send-Icon">
                    <p class="like-count">${posts[i].likes} likes</p>
                    <p id="post-comments"><span id="comment-name">${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
            </section>
        
        
        `
    }
    
}



renderSite();


pageContent.addEventListener("click", function (e) {
  if (e.target.classList.contains("like-icon")) {

    // innerhalb des gleichen Posts den Like-Text finden
    const postBody = e.target.closest(".post-body");
    const likeEl = postBody.querySelector(".like-count");

    // Zahl aus "21 likes" holen und +1
    const currentLikes = parseInt(likeEl.textContent, 10);
    likeEl.textContent = `${currentLikes + 1} likes`;
  }
});

