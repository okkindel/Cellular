var num_of_cells = 1;
var canvas, context;
var MAX_W, MAX_H;
var spectator = null;
var infoVisible = true;
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
        }
        createRandomCrumb();
    }, 200);
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
    if (infoVisible)
        drawInfo();
    if (spectator)
        spectator.showInfo();
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

function drawInfo() {
    rect(MAX_W - 220, 20, 200, 110, "white", "black");
    text("number of cells: " + particles.length, "1rem Arial", MAX_W - 200, 50, 'start', 'black');
    text("keeps limit of: " + num_of_cells, "1rem Arial", MAX_W - 200, 70, 'start', 'black');
    text("longest living:", "1rem Arial", MAX_W - 200, 105, 'start', 'black');
    // draw cell
    if (particles.length > 0) {
        const particle = particles.reduce((prev, current) => (prev.born < current.born) ? prev : current);
        circle(MAX_W - 60, 100, 20, particle.color);
        circle(MAX_W - 60 + 20 * Math.cos(particle.angle) * 0.7, 100 + 20 * Math.sin(particle.angle) * 0.7, 3, "white");
    }
}

document.addEventListener('mousedown', function () {
    checkClick(event.x, event.y);
});

document.addEventListener('keydown', function () {
    if (event.keyCode == 72)
        createRandomCrumb();
    if (event.keyCode == 73)
        infoVisible = !infoVisible;
    if (event.keyCode == 78)
        createRandomCell();
    if (event.keyCode == 82)
        particles = [];
    if (event.keyCode == 38 && num_of_cells < 100)
        num_of_cells++;
    if (event.keyCode == 40 && num_of_cells > 0)
        num_of_cells--;
});