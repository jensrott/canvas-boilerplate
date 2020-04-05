import utils from "./utils";
import Circle from './models/Circle'

import Stats from 'stats.js';
import * as dat from 'dat.gui';

// Canvas setup
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// stats.js setup
const stats = new Stats();
stats.showPanel(1);
document.body.appendChild(stats.dom);

// dat.gui setup
const gui = new dat.GUI()

// If settings objects exists in localstorage. We take that one. If it doesn't exists we add the settings object with the values we want.
let circleSettings = { circles: localStorage.getItem('settings') ? JSON.parse(localStorage.getItem('settings')).circles : 300 }
let sizeSettings = {
    min: localStorage.getItem('sizes') ? JSON.parse(localStorage.getItem('sizes')).min : 1,
    max: localStorage.getItem('sizes') ? JSON.parse(localStorage.getItem('sizes')).max : 30
}

gui.add(circleSettings, 'circles', circleSettings.circles ? 0 : null, 300).onChange(init).name('amount');
gui.add(sizeSettings, 'min').min(sizeSettings.min ? 1 : null).max(sizeSettings.max ? 30 : null).onChange(init).name(`max size is ${sizeSettings.max}`);

// Colors for our circles
const colorPallete = ['#1eb2a6', '#d4f8e8', '#ffa34d', '#f67575'];

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

// Mouse event
window.addEventListener('mousemove', (event) => {
    mouse.x = event.x
    mouse.y = event.y
})

// Resize event
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})


// We instantiate it here so we can use it in other functions
let circle;
let circles;
// let amount;

function init() {
    localStorage.setItem('settings', JSON.stringify(circleSettings));
    localStorage.setItem('sizes', JSON.stringify(sizeSettings))

    // amount = 300
    circles = []

    for (let i = 0; i < circleSettings.circles; i++) {
        let x = Math.random() * innerWidth;
        let y = Math.random() * innerHeight;
        let size = utils.randomIntFromRange(sizeSettings.min, sizeSettings.max);

        let newCircle = new Circle(canvas, ctx, x, y, size, utils.randomColorFromArray(colorPallete))
        circles.push(newCircle);
    }
    circle = new Circle(canvas, ctx, undefined, undefined, utils.randomIntFromRange(sizeSettings.min, sizeSettings.max), utils.randomColor());
}

// Draw
function animate() {
    // stats.js start
    stats.begin();

    requestAnimationFrame(animate)

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    circles.forEach(circle => {
        circle.update();
    })

    circle.x = mouse.x;
    circle.y = mouse.y;
    circle.update()

    // stats.js end
    stats.end();

}

init();
animate();