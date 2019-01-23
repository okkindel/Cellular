function Particle(x, y) {

    this.color = approximateColor('#102030', '#ffffff', Math.random());
    this.x = x; this.y = y;
    this.velx = 0; this.vely = 0;
    this.acc = 0; this.angle = 0;
    this.mass = Math.random() * 20 + 30;

    this.show = function () {
        circle(this.x, this.y, this.radius, this.color);
        // an eye
        circle(this.x + this.radius * Math.cos(this.angle) * 0.7, this.y + this.radius * Math.sin(this.angle) * 0.7, this.radius / 5, "white");
        // a line
        // line(this.x, this.y, this.x + this.radius * Math.cos(this.angle), this.y + this.radius * Math.sin(this.angle), "white");
    }

    this.update = function () {
        this.wrap();
        this.doRandomMoves();
        addFriction(this);
        this.velx += this.acc * Math.cos(this.angle);
        this.vely += this.acc * Math.sin(this.angle);
        this.angle = this.angle % (2 * Math.PI);
        this.radius = this.mass;
        this.x += this.velx;
        this.y += this.vely;
        if (this.mass < 15) {
            this.die();
        }
    }

    this.doRandomMoves = function () {
        // chnage angle a little bit
        this.angle += (Math.random() * Math.PI / 8 - Math.PI / 16);
        if (Math.random() * 10 >> 0 == 0) {
            this.acc += Math.random() * 2 >> 0;
            // loose weignt on move
            this.mass *= 0.99;
        }
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

    this.die = function () {
        particles.splice(particles.indexOf(this), 1);
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