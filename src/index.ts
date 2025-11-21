import "globals";

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background("black");

    stroke("yellow");
    for (let y1 = 50; y1 <= 450; y1 += 50) {
        for (let y2 = 50; y2 <= 450; y2 += 50) {
            line(50, y1, 450, y2);
        }
    }
}
`