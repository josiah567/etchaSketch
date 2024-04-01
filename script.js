document.addEventListener("DOMContentLoaded", function() {
    // Get the body element
    let body = document.body;

    // Create a grid, for example, 5x5
    let rows = 16;
    let cols = 16;

    // Loop to create grid items and append them to the body
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");

            // Set the position of each grid item
            gridItem.style.left = j * 100 + "px";
            gridItem.style.top = i * 100 + "px";

            // Append the grid item to the body
            body.appendChild(gridItem);
        }
    }
});
