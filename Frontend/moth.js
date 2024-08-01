// HTML:
// <input type="number" id="a">
// <input type="number" id="b">
// <button class="button">Check</button>

// JavaScript:
document.querySelector(".button").addEventListener("click", function (e) {
    // Get the values of a, b, and c
    e.preventDefault();
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);

    // Check if a is greater than 1200
    if (a < 80 &&c<40) {
        // Redirect to "/rfarmer.html"
        alert("Crop is perfectly fine.");
    } else {
        // Display an alert message
        alert("Crop is affected, and revised price will be sent soon.");
    }
});
