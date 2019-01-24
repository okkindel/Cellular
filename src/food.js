function Food(x, y) {
    this.x = x; this.y = y;
    this.size = 3;
    this.mass = (Math.random() * 3 + 1) >> 0;
    this.color = getRandomColor();

    this.show = function () {
        circle(this.x, this.y, this.size, this.color);
    }
}

function eatFood(particle) {
    food.forEach(function (crumb) {
        if ((Math.pow((particle.x - crumb.x), 2) + Math.pow((particle.y - crumb.y), 2))
        < Math.pow((particle.radius + crumb.size), 2)) {
            food.splice(food.indexOf(crumb), 1);
            particle.mass += crumb.mass;
        }
    });
}