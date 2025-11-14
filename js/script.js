// Core DOM references
const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const restartBtn = document.getElementById("restart");
const scoreDisplay = document.getElementById("scoreDisplay");
const descText = document.getElementById("descText");
const btnHome = document.getElementById("btnHome");

// Sound effects
const sndJump = document.getElementById("sndJump");
const sndHit = document.getElementById("sndHit");
const sndMars = document.getElementById("sndMars");

// Game state
let y = 40;             // player vertical position (px from bottom)
let jumping = false;
let alive = true;
let score = 0;
let baseSpeed = 16;     // base obstacle speed

// Randomly choose which obstacle (0–9) will be the alien 👾
let alienIndex = Math.floor(Math.random() * 10);
let alienUsed = false;

/**
 * Trigger jump (keyboard or touch).
 */
function jump() {
  if (jumping || !alive) return;

  if (sndJump) {
    sndJump.currentTime = 0;
    sndJump.play();
  }

  jumping = true;
  let up = 0;

  const jumpInterval = setInterval(() => {
    if (!alive) {
      clearInterval(jumpInterval);
      return;
    }

    // Up then down
    if (up < 40) {
      y += 6;
    } else {
      y -= 6;
    }

    player.style.bottom = y + "px";
    up++;

    if (up >= 80) {
      clearInterval(jumpInterval);
      jumping = false;
      y = 40;
      player.style.bottom = "40px";
    }
  }, 13);
}

/**
 * Input: keyboard + touch for mobile.
 */
document.addEventListener("keydown", (e) => {
  if (e.key === " " || e.key === "ArrowUp") {
    e.preventDefault();
    jump();
  }
});

// Basic tap anywhere to jump on touch devices
window.addEventListener("touchstart", (e) => {
  // Avoid ghost clicks on buttons
  if (e.target.tagName === "BUTTON") return;
  jump();
});

/**
 * Move a single obstacle from right to left.
 * When off-screen, it counts as dodged and spawns the next one.
 */
function moveObstacle() {
  let posX = window.innerWidth + 60;

  // Decide if this obstacle is the alien (only once per run)
  if (score === alienIndex && !alienUsed) {
    obstacle.textContent = "👾";
    alienUsed = true;
  } else {
    obstacle.textContent = "🪨";
  }

  const speed = baseSpeed + score * 2 + Math.random() * 5;

  const interval = setInterval(() => {
    if (!alive) {
      clearInterval(interval);
      return;
    }

    posX -= speed;
    obstacle.style.left = posX + "px";

    const shipRect = player.getBoundingClientRect();
    const obsRect = obstacle.getBoundingClientRect();

    const hit =
      shipRect.left < obsRect.right &&
      shipRect.right > obsRect.left &&
      shipRect.bottom > obsRect.top &&
      shipRect.top < obsRect.bottom;

    if (hit) {
      alive = false;
      if (sndHit) {
        sndHit.currentTime = 0;
        sndHit.play();
      }
      descText.innerHTML = "You crashed into an obstacle. Try again.";
      return;
    }

    // Obstacle went off the left edge: successfully dodged
    if (posX < -100) {
      clearInterval(interval);
      score++;
      scoreDisplay.textContent = `Asteroids dodged: ${score} / 10`;

      if (score >= 10) {
        reachMars();
      } else {
        moveObstacle();
      }
    }
  }, 30);
}

/**
 * Called when the player successfully dodges 10 obstacles.
 * Plays Mars sound, animates background + landing.
 */
function reachMars() {
  alive = false;

  if (sndMars) {
    sndMars.currentTime = 0;
    sndMars.play();
  }

  document.body.classList.add("to-mars");
  descText.innerHTML =
    "You have crossed the asteroid belt. Welcome to <strong>MARS-404</strong>.";

  obstacle.style.display = "none";
  player.classList.add("landing");
}

/**
 * Reset all state and start a new run.
 */
restartBtn.addEventListener("click", () => {
  alive = true;
  score = 0;
  baseSpeed = 16;

  obstacle.style.display = "block";
  obstacle.style.left = "100%";

  descText.textContent =
    "You are flying through an asteroid belt. Dodge the rocks (and the alien 👾) to escape the 404 error.";
  scoreDisplay.textContent = "Asteroids dodged: 0 / 10";

  document.body.classList.remove("to-mars");

  // Reset rocket visual state
  player.classList.remove("landing");
  player.style.position = "absolute";
  player.style.left = "";
  player.style.top = "";
  player.style.bottom = "40px";

  // New alien appearance index for this run
  alienIndex = Math.floor(Math.random() * 10);
  alienUsed = false;

  moveObstacle();
});

/**
 * Return to home page.
 * Adjust the URL if your home is not the root ("/").
 */
btnHome.addEventListener("click", () => {
  window.location.href = "/";
});

// Start first obstacle
moveObstacle();
