import utils from '../utils';

class Circle {
    constructor(canvas, ctx, x, y, radius, color) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;

        this.velocity = {
            x: utils.randomIntFromRange(-4, 4),
            y: utils.randomIntFromRange(-5, 5)
        };
        this.friction = 0.7;
        this.gravity = 1;
    }

    // The thing you draw
    draw() {
        this.ctx.strokeStyle = this.color
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        // this.ctx.fill()
        this.ctx.stroke()
    }

    // Animations happen here
    update() {
        this.draw() // We draw it

        // We do things with the drawed item
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.checkCorners();
    }

    checkCorners() {
        if (this.y + this.velocity.y > innerHeight || this.y + this.velocity.y < 0) {
            this.velocity.y = -this.velocity.y;
        } else if (this.x + this.velocity.x > innerWidth || this.x + this.velocity.x < 0) {
            this.velocity.x = -this.velocity.x;
        }
    }


}

export default Circle;