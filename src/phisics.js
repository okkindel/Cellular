function wrap(particle) {
    if (particle.x < 0)
        particle.x = MAX_W;
    if (particle.x > MAX_W)
        particle.x = 0;
    if (particle.y < 0)
        particle.y = MAX_H;
    if (particle.y > MAX_H)
        particle.y = 0;
}

function addFriction(particle) {
    particle.setVel(particle.velx / friction, particle.vely / friction);
    particle.setForce(particle.acc / friction);
}

function checkColision(par1) {
    let distance = MAX_W * MAX_W;
    let particle = null;
    particles.forEach(function (par2) {
        if (par1 != par2) {

            let soonx = par1.x + par1.velx;
            let soony = par1.y + par1.vely;

            if ((Math.pow((soonx - par2.x), 2) + Math.pow((soony - par2.y), 2)) < Math.pow((par1.radius + par2.radius), 2)) {
                if ((Math.pow((par1.x - par2.x), 2) + Math.pow((par1.y - par2.y), 2)) < distance) {
                    distance = (Math.pow((par1.x - par2.x), 2) + Math.pow((par1.y - par2.y), 2));
                    particle = par2;
                }
            }
        }
    });


    if (particle != null) {
        // par1.setForce(0);
        // particle.setForce(0);
        
        c_angle = par1.angle + particle.angle / 2;
        
        par1.angle += c_angle;
        particle.angle += c_angle;
        
        c_acc = par1.acc;
        
        par1.acc = particle.acc + (particle.mass * 0.01);
        particle.acc = c_acc + (par1.mass * 0.01); 
        
        par1.setVel(0, 0);
        particle.setVel(0, 0);

        if ((Math.pow((par1.x - particle.x), 2) + Math.pow((par1.y - particle.y), 2)) < Math.pow((par1.radius + particle.radius), 2))
            particles.splice(particles.indexOf(par1), 1);
    }

}
