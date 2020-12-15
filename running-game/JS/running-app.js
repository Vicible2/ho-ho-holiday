const canvas = document.getElementById('gameContainer');
const context = canvas.getContext('2d');

//Variables
let score;
let highscore;
let player;
let gravity;
let obstacles = [];
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
            this.jump();
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

       

        this.draw();
    }
    jump() {
        if (this.grounded && this.jumpTimer == 0) {
            this.jumpTimer = 1 ;
            this.dy = -this.jumpForce;
        } else if (this.jumpTimer > 0 && this.jumpTimer < 30) {
            this.jumpTimer++;
            this.dy = -this.jumpForce - (this.jumpTimer / 50);
        }
    }


    draw() { //draw function to create basic rectangle that is the player (will be replace with pixelAvatar later)
        context.beginPath();
        context.fillStyle = this.c;
        context.fillRect(this.x, this.y, this.w, this.h);
        context.closePath();
    }
}

class Obstacle {
    constructor (x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;

        //Velocity on x Axis in negative (left) direction
        this.dx = -gameSpeed;
    }

    update () {
        this.x += this.dx;
        this.draw();
        this.dx = -gameSpeed;
    }

    draw () {
        context.beginPath();
        context.fillStyle = this.c;
        context.fillRect(this.x, this.y, this.w, this.h);
        context.closePath();
    }
}


//Game Functions
spawnObstacle = () => {
    let size = randomObstacleInt(20, 70);
    //obstacleType 0 or 1, 0 = ground type, 1 is flying type
    let type = randomObstacleInt(0, 1);
    let obstacle = new Obstacle(canvas.width + size, canvas.height - size,
        size, size, '#F5D3A0');

        if (type == 1) {
            obstacle.y -= player.originalHeight - 10;
        }
        obstacles.push(obstacle);

} 



randomObstacleInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}
spawnObstacle();


//initialize function so all variables are at default values.
start = () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    context.font = "20px sans-serif";

    gameSpeed = 2;
    gravity = 1;

    score = 0;
    highscore = 0;


    player = new Player(25, 0, 50, 50, '#001B3D');

    requestAnimationFrame(update);
    // player.Draw(); call draw function to create rectangle
}

let initialSpawnTimer = 200;
let spawnTimer = initialSpawnTimer;
update = () => {
    requestAnimationFrame(update); //once called (see Start function) we want to keep repeating this so it seems animated
    context.clearRect(0, 0, canvas.width, canvas.height); //if we don't clear our canvas every frame we will keep drawing the same over & over again


    spawnTimer--;
    if (spawnTimer <= 0) {
        spawnObstacle();
        console.log(obstacles);
        spawnTimer = initialSpawnTimer - gameSpeed * 8;

        if (spawnTimer < 60) {
            spawnTimer = 60;
        }

    }

    //Spawn Enemies
    for (let i = 0; i < obstacles.length; i++) {
        let o = obstacles[i];


        o.update();
    }

    player.Animate();

}

start();