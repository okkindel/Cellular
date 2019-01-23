function Food(x, y) {
    this.x = x; this.y = y;

    this.show = function () {
        circle(this.x, this.y, 5, "red");
    }
}