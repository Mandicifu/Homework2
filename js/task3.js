function changeSrc(img) {
    // Change source
    img.src = "media/imgAlt.jpg"
}

function changeSize(img) {
    // Change size
    img.style.width = "400px"
    img.style.height = "400px"
}

function displayText() {
    // Display a text in div
    document.getElementById("div").innerHTML = "Clicked Image!"
}
