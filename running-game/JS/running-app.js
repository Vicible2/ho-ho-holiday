const canvas = document.getElementById('gameContainer');
const context = canvas.getContext('2d');

//Variables
let score;
let highscore;
let player;
let gravity;
let obstacles;
let gameSpeed;
let keys = {};

//Event Listeners
document.addEventListener('keydown', (event) => {
    keys[event.code] = true;
});
document.addEventListener('keyup', (event) => {
    keys[event.code] = false;
});



class Player {
    constructor(x, y, w, h, c) {
        // xAxis, yAxis, width, height, color
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;

        this.dy = 0; //direction y-Force
        this.jumpForce = 15;
        this.originalHeight = h; //reference for normal playerHeight (ducking wil have to reset after shrink)
        this.grounded = false;
        this.jumpTimer = 0;

    }

    Animate() {
        //Jump animation
        if (keys['Space'] || keys['KeyW']) {
            console.log('Jump');
            this.Jump();
        } else {
            //Jumptimer: when pressing space you add force to player, if you hold it will add force if no jumptimer
            this.jumpTimer = 0;
        }

        if(keys['ShiftLeft'] || keys['KeyS']) {
            this.h = this.originalHeight / 2;
        } else {
            this.h = this.originalHeight;
        }

        this.y += this.dy; //needs to be ABOVE gravity, as gravity will check

        //Gravity / drop character
        if (this.y + this.h < canvas.height) {
            this.dy += gravity;
            this.grounded = false;
        } else {
            this.dy = 0;
            this.grounded = true;
            this.y = canvas.height - this.h;
        }

       

        this.Draw();
    }
    Jump() {
        if (this.grounded && this.jumpTimer == 0) {
            this.jumpTimer = 1 ;
            this.dy = -this.jumpForce;
        } else if (this.jumpTimer > 0 && this.jumpTimer < 17) {
            this.jumpTimer++;
            this.dy = -this.jumpForce - (this.jumpTimer / 50);
        }
    }


    Draw() { //draw function to create basic rectangle that is the player (will be replace with pixelAvatar later)
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


    player = new Player(25, 0, 50, 50, '#001B3D');

    requestAnimationFrame(Update);
    // player.Draw(); call draw function to create rectangle
}

Update = () => {
    requestAnimationFrame(Update); //once called (see Start function) we want to keep repeating this so it seems animated
    context.clearRect(0, 0, canvas.width, canvas.height); //if we don't clear our canvas every frame we will keep drawing the same over & over again

    player.Animate();

}
Start();