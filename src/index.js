var num_of_cells = 25;
var canvas, context;
var MAX_W, MAX_H;
var particles = [];
var food = [];

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

    setInterval(function () {
        if (particles.length < num_of_cells) {
            createRandomCell();
            createRandomCrumb();
        }
    }, 250);
}

function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
    food.forEach(function (item) {
        item.show();
    });
    particles.forEach(function (item) {
        item.show();
    });
    text("Number of cells: " + num_of_cells, "1rem Arial", canvas.width - 20, 30, 'end', 'black');
}

function update() {
    particles.forEach(function (item) {
        item.update();
        checkColision(item);
        eatFood(item);
    });
}

function createRandomCell() {
    const particle = new Particle(Math.random() * MAX_W, Math.random() * MAX_H);
    particle.setForce(Math.random() * 10);
    particle.setAngle(Math.random() * Math.PI * 2);
    particles.push(particle);
}

function createRandomCrumb() {
    const crumb = new Food(Math.random() * MAX_W, Math.random() * MAX_H);
    food.push(crumb);
}

document.addEventListener('mousedown', function () {
    createRandomCell();
});

document.addEventListener('keydown', function () {
    if (event.keyCode == 82)
        particles = [];
    if (event.keyCode == 38 && num_of_cells < 100)
        num_of_cells++;
    if (event.keyCode == 40 && num_of_cells >= 0)
        num_of_cells--;
});