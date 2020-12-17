const canvas = document.getElementById('gameContainer');
const ctx = canvas.getContext('2d');

// Variables
let score;
let scoreText;
let highscore;
let highscoreText;
let player;
let gravity;
let obstacles = [];
let gameSpeed;
let keys = {};

// Event Listeners
document.addEventListener('keydown', function (evt) {
  keys[evt.code] = true;
});
document.addEventListener('keyup', function (evt) {
  keys[evt.code] = false;
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
      this.Jump();
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

    // Gravity / drop character
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
      this.jumpTimer = 1;
      this.dy = -this.jumpForce;
    } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
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



  Draw() { //draw function to create basic rectangle that is the player (will be replace with pixelAvatar later)
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.closePath();
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

  Update() {
    this.x += this.dx;
    this.Draw();
    this.dx = -gameSpeed;
  }

  Draw() {
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.closePath();
  }
}

class Text {
  constructor(t, x, y, a, c, s) {
    this.t = t;
    this.x = x;
    this.y = y;
    this.a = a;
    this.c = c;
    this.s = s;
  }

  Draw() {
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.font = this.s + "px sans-serif";
    ctx.textAlign = this.a;
    ctx.fillText(this.t, this.x, this.y);
    ctx.closePath();
  }
}

// Game Functions
function SpawnObstacle() {
  let size = RandomIntInRange(20, 70);
  //obstacleType 0 or 1, 0 = ground type, 1 is flying type
  let type = RandomIntInRange(0, 1);
  let obstacle = new Obstacle(canvas.width + size, canvas.height - size, size, size, '#2484E4');

  if (type == 1) {
    obstacle.y -= player.originalHeight - 10;
  }
  obstacles.push(obstacle);
}

//RandomInteger to define obstacle size & type
function RandomIntInRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}


//initialize function so all variables are at default values.
function Start() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.font = "20px sans-serif";

  gameSpeed = 3;
  gravity = 1;

  score = 0;
  highscore = 0;

  //remembers our highscore from localStorage when refreshing the page
  if (localStorage.getItem('highscore')) {
    highscore = localStorage.getItem('highscore');
  }

  player = new Player(250, 0, 50, 50, '#FF5858');

  scoreText = new Text("Score: " + score, 25, 25, "left", "#E1F2F7", "20");
  highscoreText = new Text("Highscore: " + highscore, canvas.width - 25, 25, "right", "#E1F2F7", "20");

  requestAnimationFrame(Update);
  // player.Draw(); call draw function to create rectangle
}

let initialSpawnTimer = 200;
let spawnTimer = initialSpawnTimer;

function Update() {
  requestAnimationFrame(Update); //once called (see Start function) we want to keep repeating this so it seems animated
  ctx.clearRect(0, 0, canvas.width, canvas.height); //if we don't clear our canvas every frame we will keep drawing the same over & over again

  spawnTimer--;
  if (spawnTimer <= 0) {
    SpawnObstacle();
    console.log(obstacles);
    spawnTimer = initialSpawnTimer - gameSpeed * 8;

    if (spawnTimer < 60) {
      spawnTimer = 60;
    }
  }

  // Spawn Enemies
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
      gameSpeed = 3;
      window.localStorage.setItem('highscore', highscore);
    }

    o.Update();
  }

  player.Animate();

  score++;
  scoreText.t = "Score: " + score;
  scoreText.Draw();

  if (score > highscore) {
    highscore = score;
    highscoreText.t = "Highscore: " + highscore;
  }

  highscoreText.Draw();

  gameSpeed += 0.0002;
}
// Window resize to keep background-responsive
/*window.addEventListener('resize', () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
})*/

Start();