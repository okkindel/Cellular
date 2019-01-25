function Particle(x, y) {

    this.born = new Date(); this.divides = 0;
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
        wrap(this);
        addFriction(this);
        this.doRandomMoves();
        this.velx += this.acc * Math.cos(this.angle);
        this.vely += this.acc * Math.sin(this.angle);
        this.angle = this.angle % (2 * Math.PI);
        this.radius = this.mass;
        this.x += this.velx;
        this.y += this.vely;
        if (this.mass < 15) {
            this.die();
        }
        if (this.mass > 80 && cell_division) {
            this.divide();
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

    this.die = function () {
        particles.splice(particles.indexOf(this), 1);
        for (let i = 0; i < this.mass; i++) {
            const angle = Math.random() * 2 * Math.PI;
            const crumb = new Food(this.x + this.radius * Math.cos(angle), this.y + this.radius * Math.sin(angle));
            food.push(crumb);
        }
        deaths++;
    }

    this.divide = function () {
        const child = new Particle(this.x, this.y);
        this.mass /= 2;
        child.color = this.color;
        child.mass = this.mass;
        particles.push(child);
        this.divides++;
        divides++;
    }

    this.showInfo = function () {
        if (this == spectator)
            frame(this.x, this.y, this.radius, "#123");
        rect(20, 20, 200, 70, "white", "black");
        text("time living: " + Math.round((new Date() - this.born) / 10) / 100, "1rem Arial", 40, 50, 'start', 'black')
        text("number of divides: " + this.divides, "1rem Arial", 40, 70, 'start', 'black')
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