function Particle(x, y) {

    this.stop = false;
    this.x = x; this.y = y;
    this.mass = Math.random() * 10 + 20;
    this.velx = 0;
    this.vely = 0;
    this.acc = 0;
    this.angle = 0;
    this.color = getRandomColor();
    this.radius = this.mass;

    this.show = function () {
        circle(this.x, this.y, this.radius, this.color);
        line(this.x, this.y, this.x + this.radius * Math.cos(this.angle), this.y + this.radius * Math.sin(this.angle), "white");
    }

    this.update = function () {
        addFriction(this);
        this.wrap();
        this.doRandomMoves();
        this.velx += this.acc * Math.cos(this.angle);
        this.vely += this.acc * Math.sin(this.angle);
        this.x += this.velx;
        this.y += this.vely;
    }

    this.doRandomMoves = function () {
        this.angle += (Math.random() * Math.PI / 8 - Math.PI / 16);
        this.angle = this.angle % (2 * Math.PI);
        if (Math.random() * 10 >> 0 == 0)
            this.acc += Math.random() * 2 >> 0;
    }

    this.wrap = function () {
        if (this.x < 0)
            this.x = MAX_W;
        if (this.x > MAX_W)
            this.x = 0;
        if (this.y < 0)
            this.y = MAX_H;
        if (this.y > MAX_H)
            this.y = 0;
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
}