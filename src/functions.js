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
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function approximateColor(color1, color2, percent) {
    var red1 = parseInt(color1[1] + color1[2], 16);
    var green1 = parseInt(color1[3] + color1[4], 16);
    var blue1 = parseInt(color1[5] + color1[6], 16);

    var red2 = parseInt(color2[1] + color2[2], 16);
    var green2 = parseInt(color2[3] + color2[4], 16);
    var blue2 = parseInt(color2[5] + color2[6], 16);

    var red = Math.round(mix(red1, red2, percent));
    var green = Math.round(mix(green1, green2, percent));
    var blue = Math.round(mix(blue1, blue2, percent));

    return generateHex(red, green, blue);
}

function generateHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    // to address problem mentioned by Alexis Wilke:
    while (r.length < 2) { r = "0" + r; }
    while (g.length < 2) { g = "0" + g; }
    while (b.length < 2) { b = "0" + b; }

    return "#" + r + g + b;
}

function mix(start, end, percent) {
    return start + ((percent) * (end - start));
}