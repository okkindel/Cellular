function Particle(x, y) {

    this.x = x; this.y = y;
    this.radius = Math.random() * 10 + 5;
    this.velx = 0;
    this.vely = 0;
    this.acc = 0;
    this.angle = 0;
    this.mass = this.radius;
    this.color = getRandomColor();

    this.show = function () {
        circle(this.x, this.y, this.radius, this.color);
        line(this.x, this.y, this.x + this.radius * Math.cos(radians(this.angle)), this.y + this.radius * Math.sin(radians(this.angle)), "white");
    }

    this.update = function () {
        wrap(this);
        addFriction(this);
        this.velx += Math.round(this.acc * Math.cos(radians(this.angle)));
        this.vely += Math.round(this.acc * Math.sin(radians(this.angle)));
        this.x += Math.round(this.velx);
        this.y += Math.round(this.vely);

        this.angle += (Math.random() * 50 - 25) >> 0;
        this.angle = this.angle % 360;
    }

    this.setForce = function (acc) {
        this.acc = acc;
    }

    this.setAngle = function (angle) {
        this.angle = angle;
    }

    this.setVel = function (x, y) {
        this.velx = x;
        this.vely = y;
    }

    this.addVel = function (x, y) {
        this.velx += x;
        this.vely -= y;
    }
}