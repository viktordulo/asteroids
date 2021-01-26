import { Game } from "./index.js";
import { Pointer } from './Pointer.js';

const game = new Game();
const pointer = Pointer.getInstance();
const ctx = game.ctx;

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "d" || "D":
            pointer.dx = 2;
            break;
        case "a" || "A":
            pointer.dx = -2;
            break;
        case "w" || "W":
            pointer.dy = -2;
            break;
        case "s" || "S":
            pointer.dy = 2;
            break;
        default:
            pointer.dx = 0;
            pointer.dy = 0;
            break;
    }
})

document.addEventListener('keyup', (event) => {
    switch (event.key) {
        case "d" || "D":
            pointer.dx = 0;
            break;
        case "a" || "A":
            pointer.dx = 0;
            break;
        case "w" || "W":
            pointer.dy = 0;
            break;
        case "s" || "S":
            pointer.dy = 0;
            break;
        default:
            pointer.dx = 0;
            pointer.dy = 0;
            break;
    }
})

document.addEventListener('mousemove', (event) => {
    pointer.mouseX = event.clientX;
    pointer.mouseY = event.clientY;
})

document.addEventListener('click' , (event) => {
    pointer.shoot();
})