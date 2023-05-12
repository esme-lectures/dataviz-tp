var dataFromJson = [];

var response = fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        dataFromJson = data;
        drawCircles();
    })
    .catch(error => console.log(error));

function drawCircles() {
    // Write function to draw circles based on the data in the dataFromJson array
}