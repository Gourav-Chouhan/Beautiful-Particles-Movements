function Ball() {
    this.x = Math.random() * 600;
    this.y = Math.random() * 600;

    this.show = function() {
        noStroke();
        fill(255, 0, 0);
        circle(this.x, this.y, 40);

    }
}

let ball = [];
for (let i = 0; i < 100; i++) {
    ball[i] = new Ball();
}



function setup() {
    createCanvas(1300, 601);
    frameRate(130);
}

let xOff = [];
for (let i = 0; i < ball.length; i++) {
    xOff[i] = Math.random() * 10000;
}

function draw() {
    background(255, 255, 255, 70);
    for (let i = 0; i < ball.length; i++) {
        ball[i].show();
        let xPos = noise(xOff[i]) * width;
        let yPos = noise(xOff[i] + 1000) * height;
        ball[i].x = xPos;
        ball[i].y = yPos;
        xOff[i] += 0.02;
    }

}