var canvas, context;
var MAX_W, MAX_H;

var particles = [];
var food = [];
var friction = 1.1;

window.onload = function () {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    MAX_W = canvas.width;
    MAX_H = canvas.height;
    const fps = 60;

    setInterval(function () {

        clear();
        draw();
        update();

    }, 1000 / fps);

    // setInterval(function () {
        // if (particles.length < 100)
            // createRandom();
        // createFood();
    // }, 250);
}


function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
    particles.forEach(function (item) {
        item.show();
    });
    food.forEach(function (item) {
        item.show();
    });
}

function update() {
    particles.forEach(function (item) {
        item.update();
        checkColision(item);
    });
}

function createRandom() {
    const particle = new Particle(Math.random() * MAX_W, Math.random() * MAX_H);
    particle.setForce(Math.random() * 20);
    particle.setAngle(Math.random() * Math.PI * 2);
    particles.push(particle);
}

function createFood() {
    const feed = new Food(Math.random() * MAX_W, Math.random() * MAX_H);
    food.push(feed);
}

document.addEventListener('mousedown', function () {
    createRandom();
});