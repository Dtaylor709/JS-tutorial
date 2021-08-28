function getImage() {
    let imageURL = document.getElementById("image-url").value;
    document.getElementById("meme-image").src = imageURL;
    document.getElementById("meme-builder").style.display = "block";
    console.log(imageURL);
}

function addTopText() {
    let topText = document.getElementById("top-text-input").value;
    document.getElementById("top-text").innerText = topText;
}

function addBottomText() {
    let bottomText = document.getElementById("bottom-text-input").value;
    document.getElementById("bottom-text").innerText = bottomText;
}