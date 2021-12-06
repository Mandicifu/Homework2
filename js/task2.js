function changeColour() {
    // Ask the user to enter a colour
    // Convert colour string to lowercase
    let colour = prompt("Give me a colour:")
    colour = "background-color: " + colour.toLowerCase()

    // Set background colour
    document.getElementById("body").style = colour
}

document.getElementById("button").onclick = changeColour