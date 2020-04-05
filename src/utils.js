/**
 * Return a random number between min and max number
 * @param {number} min 
 * @param {number} max 
 * @return {number} randomNum
 */
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Return a random color from an array
 * @param {Array} colors 
 * @return {string} color 
 */
function randomColorFromArray(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

/**
 * Return a random color 
 * @return {string} color 
 */
function randomColor() {
    return `rgb(${randomIntFromRange(0, 255)}, ${randomIntFromRange(0, 255)}, ${randomIntFromRange(0, 255)})`
}

/**
 * Return a random color and add opacity 
 * @return {string} colorOpacity 
 */
function randomColorOpacity() {
    return `rgba(${randomIntFromRange(0, 255)}, ${randomIntFromRange(0, 255)}, ${randomIntFromRange(0, 255)}, ${randomIntFromRange(0, 1)})`
}

/**
 * Return the distance between two points 
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} x2 
 * @param {number} y2
 * @return {number} distance 
 */
function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

module.exports = { randomIntFromRange, randomColorFromArray, randomColor, randomColorOpacity, distance }