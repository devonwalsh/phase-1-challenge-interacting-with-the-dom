// Functions

function countUp() {
    let currentNumber = document.getElementById("counter").innerHTML
    currentNumber++;
    document.getElementById("counter").innerHTML = currentNumber;
}

function countDown() {
    let currentNumber = document.getElementById("counter").innerHTML
    currentNumber--;
    document.getElementById("counter").innerHTML = currentNumber;
}

function like() {
    const likeList = document.querySelector(".likes");
    const newLike = document.createElement("li");
    let likedValue = document.getElementById("counter").innerHTML;

    newLike.appendChild(document.createTextNode(`${likedValue} has been liked`))
    likeList.appendChild(newLike);
}

function pause() {
    if (this.id = "pause") {
        clearInterval(autoIncrement);
        this.id = "resume";
    }
    else if (this.id = "resume") {
        this.id = "pause";
    }
    else this.id = "boo";
}

function addComment() {
    event.preventDefault();
    const commentList = document.getElementById("list");
    const comment = document.createElement("li");
    let inputText = document.getElementById("comment-input").value;

    comment.appendChild(document.createTextNode(inputText));
    commentList.appendChild(comment);
}

// Auto-increment

let autoIncrement = window.setInterval(countUp, 1000);

// Event listeners

document.getElementById("comment-form").addEventListener("submit", addComment);
document.getElementById("minus").addEventListener("click", countDown);
document.getElementById("plus").addEventListener("click", countUp);
document.getElementById("heart").addEventListener("click", like);
document.getElementById("pause").addEventListener("click", pause);