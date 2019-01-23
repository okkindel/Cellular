const friction = 1.1;

function addFriction(particle) {
    particle.setVel(particle.velx / friction, particle.vely / friction);
    particle.setForce(particle.acc / friction);
}

function checkColision(par1) {
    particles.forEach(function (par2) {
        if (par1 != par2) {
            // if are going to collide, euclidian
            if ((Math.pow((par1.x + par1.velx - par2.x), 2)
                + Math.pow((par1.y + par1.vely - par2.y), 2))
                < Math.pow((par1.radius + par2.radius), 2)) {
                let x = Math.abs(par1.x - par2.x);
                let y = Math.abs(par1.y - par2.y);

                par1.angle = Math.atan2(x, y);
                par2.angle = Math.atan2(x, y);
                if (par1.x < par2.x && par1.y < par2.y) {
                    par1.angle += Math.PI;
                    par2.angle -= 0;
                } else if (par1.x < par2.x && par1.y > par2.y) {
                    par1.angle += Math.PI / 2;
                    par2.angle -= Math.PI / 2;
                } else if (par1.x > par2.x && par1.y < par2.y) {
                    par1.angle -= Math.PI / 2;
                    par2.angle += Math.PI / 2;
                } else if (par1.x > par2.x && par1.y > par2.y) {
                    par1.angle += 0;
                    par2.angle -= Math.PI;
                } else if (par1.x < par2.x || par1.y > par2.y) {
                    par1.angle += Math.PI / 2;
                    par2.angle -= Math.PI / 2;
                } else if (par1.x > par2.x || par1.y < par2.y) {
                    par1.angle -= Math.PI / 2;
                    par2.angle += Math.PI / 2;
                }
                par1.setVel(0, 0);
                par2.setVel(0, 0);
            }
        }
    });
}