# 404s to Mars – Asteroid Belt 404 Page

Custom 404 page built for the **“404s to Mars”** hackathon.

When a user lands on a non-existent page, they are dropped into an **asteroid belt mini-game**:
they control a small rocket 🚀, dodging asteroids (and one alien 👾) to reach **MARS-404**.

---

## Team

- Members:
  - Member 1 – Valeria Cabrera
  - Member 2 – Ella Silva
  - Member 3 – Carmen Garcia
  - Member 4 - Nicolas Leocata
  - Member 5 - Lucija Kuzmic



---

## Concept

- **Theme:** 404s to Mars  
- **Narrative:**  
  The user is caught in an asteroid belt after accessing a missing page (Error 404).
  They must dodge asteroids to escape the belt and safely reach **MARS-404**.
- **Goal:**  
  Survive long enough to dodge **10 obstacles** and trigger the Mars landing.

---

## Features

- Big, clear **"Error 404"** title and **“Asteroid belt”** subtitle
- Retro arcade style using `Press Start 2P` font
- Animated starfield background
- Mini-game:
  - Rocket 🚀 controlled with **Space / Arrow Up / tap**
  - Obstacles:
    - Asteroids (🪨)
    - One random alien (👾) per run
  - Collision detection and game over state
  - Mars arrival after dodging 10 obstacles
- Sound effects:
  - Jump
  - Collision
  - Mars arrival
- Landing animation: rocket lands vertically in the center of the screen
- Clear navigation:
  - **Return to base** button → back to home
  - **Play again** button → restart game
- Responsive:
  - Scales on mobile and desktop
  - Uses `clamp()` for sizes
  - Tap-to-jump on touch devices

---

## Project Structure

```text
404-to-mars/
├── 404.html          # Main 404 error page
├── css/
│   └── styles.css    # Styling and animations
├── js/
│   └── script.js     # Game logic (JS)
├── assets/
│   ├── jump.wav      # Jump sound
│   ├── hit.wav       # Collision sound
│   └── mars.wav      # Mars arrival sound
└── README.md         # Project documentation
