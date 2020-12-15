const canvas = document.getElementById('gameContainer');
const context = canvas.getContext('2d');

//Variables
let score;
let highscore;
let player;
let gravity;
let obstacles;
let gameSpeed;
let keys = [];


class Player {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
    }
}
