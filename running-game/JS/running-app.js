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
        // xAxis, yAxis, width, height, color
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;

        this.dy = 0; //direction y Force
        this.jumpForce = 15;
        this.originalHeight = h; //reference for normal playerHeight (ducking wil have to reset after shrink)

    }

    Draw () { //draw function to create basic rectangle that is the player (will be replace with pixelAvatar later)
        context.beginPath();
        context.fillStyle = this.c;
        context.fillRect(this.x, this.y, this.w, this.h);
        context.closePath();
        }
}

//initialize function so all variables are at default values.
Start = () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    context.font = "20px sans-serif";

    gameSpeed = 3;
    gravity = 1;

    score = 0;
    highscore = 0;


    player = new Player (25, canvas.height - 150, 50, 50, 'black');
    player.Draw();
}
