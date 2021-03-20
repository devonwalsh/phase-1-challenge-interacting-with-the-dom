// Auto-increment

let autoIncrement = window.setInterval(countUp, 1000);

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

function likeValue() {
    const likeList = document.querySelector(".likes");
    const likeItem = document.createElement("li");
    let likedValue = document.getElementById("counter").innerHTML;
    uniqueId = "num-" + likedValue;
    likeItem.id = uniqueId;

    if (document.getElementById(uniqueId)) {
        let likeCount = document.querySelector("#" + uniqueId + " > span").innerHTML;
        likeCount++;
        document.querySelector("#" + uniqueId + " > span").innerHTML = likeCount;
    }
    else {
    likeItem.innerHTML = `${likedValue} has been liked <span>1</span> times.`;
    likeList.appendChild(likeItem);
    }
}

function pause() {
    if (document.getElementById("pause")) {
        clearInterval(autoIncrement);
        document.getElementById("pause").innerHTML = " resume ";
        document.getElementById("pause").id = "resume";
        document.getElementById("minus").disabled = true;
        document.getElementById("plus").disabled = true;
        document.getElementById("heart").disabled = true;
    }
    else if (document.getElementById("resume")) {
        autoIncrement = window.setInterval(countUp, 1000)
        document.getElementById("resume").innerHTML = " pause ";
        document.getElementById("resume").id = "pause";
        document.getElementById("minus").disabled = false;
        document.getElementById("plus").disabled = false;
        document.getElementById("heart").disabled = false;
    }
}

function addComment() {
    event.preventDefault();
    const commentList = document.getElementById("list");
    const comment = document.createElement("li");
    let inputText = document.getElementById("comment-input").value;

    comment.appendChild(document.createTextNode(inputText));
    commentList.appendChild(comment);
}

// Event listeners

document.getElementById("minus").addEventListener("click", countDown);
document.getElementById("plus").addEventListener("click", countUp);
document.getElementById("heart").addEventListener("click", likeValue);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("comment-form").addEventListener("submit", addComment);