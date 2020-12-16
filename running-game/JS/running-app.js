const canvas = document.getElementById('gameContainer');
const context = canvas.getContext('2d');

//Variables
let score;
let scoreText;
let highscore;
let highscoreText;
let player;
let gravity;
let obstacles = [];
let gameSpeed;
let keys = {};
let avatar = document.createElement('img');


//load avatar into class player.


//Event Listeners
document.addEventListener('keydown', (event) => {
    keys[event.code] = true;
});
document.addEventListener('keyup', (event) => {
    keys[event.code] = false;
});


// Classes
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

        if (keys['ShiftLeft'] || keys['KeyS']) {
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
        this.drawImage();
    }
    jump() {
        if (this.grounded && this.jumpTimer == 0) {
            this.jumpTimer = 1;
            this.dy = -this.jumpForce;
        } else if (this.jumpTimer > 0 && this.jumpTimer < 30) {
            this.jumpTimer++;
            this.dy = -this.jumpForce - (this.jumpTimer / 50);
        }
    }

    /* drawImage() {

        avatar.src = "../assets/sprites/santa-idle.gif"
        img.addEventListener('Load', () => {
            for (let imgX = 10; imgX < 200; imgX +=30) {
                context.drawImage(avatar, imgX, 10);
            }
        })
    }*/
    draw() { //draw function to create basic rectangle that is the player (will be replace with pixelAvatar later)
        context.beginPath();
        context.fillStyle = this.c;
        context.fillRect(this.x, this.y, this.w, this.h);
        context.closePath(); 
        // context.drawImage(character, 0, 0, canvas.width, canvas.height);
        
    } 
}

class Obstacle {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;

        //Velocity on x Axis in negative (left) direction
        this.dx = -gameSpeed;
    }

    update() {
        this.x += this.dx;
        this.draw();
        this.dx = -gameSpeed;
    }

    draw() {
        context.beginPath();
        context.fillStyle = this.c;
        context.fillRect(this.x, this.y, this.w, this.h);
        context.closePath();
    }
}

class Text {
    constructor(t, x, y, a, c, s, ) {

        this.t = t;
        this.x = x;
        this.y = y;
        this.a = a;
        this.c = c;
        this.s = s;

    }

    draw() {
        context.beginPath();
        context.fillStyle = this.c;
        context.font = this.s + "px sans-serif";
        context.textAlign = this.a;
        context.fillText(this.t, this.x, this.y);
        context.closePath();
    }
}
//Game Functions
spawnObstacle = () => {
    let size = randomObstacleInt(20, 70);
    //obstacleType 0 or 1, 0 = ground type, 1 is flying type
    let type = randomObstacleInt(0, 1);
    let obstacle = new Obstacle(canvas.width + size, canvas.height - size, size, size, '#58B69B');

    if (type == 1) {
        obstacle.y -= player.originalHeight - 10;
    }
    obstacles.push(obstacle);

}
//RandomInteger to define obstacle size & type
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

    //remembers our highscore from localStorage when refreshing the page
    if (localStorage.getItem('highscore')) {
        highscore = localStorage.getItem('highscore');
    }


    player = new Player(350, 0, 50, 50, '#D33943');


    scoreText = new Text("Score: " + score, 25, 25, "left", "#E1F2F7", "20");
    highscoreText = new Text("Highscore: " + highscore, canvas.width - 25, 25, "right", "#E1F2F7", "20");

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

        //delete obstacles that have passed to not slow down computer over time
        if (o.x + o.w < 0) {
            obstacles.splice(i, 1);
        }

        if (
            player.x < o.x + o.w &&
            player.x + player.w > o.x &&
            player.y < o.y + o.h &&
            player.y + player.h > o.y
            ) {
                obstacles = [];
                score = 0;
                spawnTimer = initialSpawnTimer;
                gameSpeed = 2;

                window.localStorage.setItem('highscore', highscore);
            }



            o.update();
    }

    player.Animate();

    score++;
    scoreText.t = "Score: " + score;
    scoreText.draw();

    if(score > highscore) {
        highscore = score;
        highscoreText.t = "Higscore: " + highscore;
       
    }

    highscoreText.draw();

    gameSpeed += 0.0002;
}

window.addEventListener('resize', () => {
    canvas.height = windows.innerHeight;
    canvas.width = windows.innerWidth;
})

start();