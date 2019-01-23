function text(txt, fnt, x, y, a, c) {
    context.font = fnt;
    context.fillStyle = c;
    context.textAlign = a;
    context.fillText(txt, x, y);
}

function rect(x, y, w, h, c) {
    context.fillStyle = c;
    context.fillRect(x, y, w, h);
}

function line(sx, sy, dx, dy, c) {
    context.moveTo(sx, sy);
    context.lineTo(dx, dy);
    context.lineWidth = 5;
    context.strokeStyle = c;
    context.lineWidth = 1;
    context.stroke();
}

function circle(x, y, r, c) {
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI, false);
    context.fillStyle = c;
    context.fill();
}

function getRandomColor() {
    // var letters = '0123456789ABCDEF';
    // var color = '#';
    // for (var i = 0; i < 6; i++) {
    //     color += letters[Math.floor(Math.random() * 16)];
    // }
    color = ((Math.random() * 50) + 10 >> 0) + ((Math.random() * 50) + 10 >> 0) * 100 + ((Math.random() * 50) + 10 >> 0) * 10000;
    color = '#' + color;
    return color;
}

function radians(degrees) {
    return Math.PI + (degrees * Math.PI / 180);
}