// ============================================
// 90s SPACE ODYSSEY 404 PAGE - JAVASCRIPT
// Interactive elements and retro effects
// ============================================

// Update current time in status bar
function updateTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    timeElement.textContent = `TIME: ${timeString}`;
}

// Initialize time and update every second
updateTime();
setInterval(updateTime, 1000);

// ============================================
// NAVIGATION FUNCTIONS
// ============================================

function goHome() {
    // Add glitch effect before navigation
    document.querySelector('.terminal-window').style.animation = 'terminal-glitch 0.5s';
    
    setTimeout(() => {
        // Change this to your actual home page URL
        window.location.href = '/';
    }, 500);
}

function randomPage() {
    // Simulate random coordinate generation
    const coordinates = generateRandomCoordinates();
    
    // Show coordinates in console (90s hacker aesthetic)
    console.log(`%c🚀 NAVIGATING TO COORDINATES: ${coordinates}`, 
        'color: #00ffff; font-size: 16px; font-weight: bold;');
    
    // Add loading effect
    showLoadingEffect();
    
    setTimeout(() => {
        // In a real scenario, you might navigate to a random valid page
        // For demo, just refresh or go to a specific page
        alert(`Coordinates locked: ${coordinates}\n\nRedirecting to mission control...`);
        window.location.href = '/';
    }, 2000);
}

function generateRandomCoordinates() {
    const lat = (Math.random() * 180 - 90).toFixed(4);
    const lon = (Math.random() * 360 - 180).toFixed(4);
    return `LAT: ${lat}° LON: ${lon}°`;
}

function showLoadingEffect() {
    const terminal = document.querySelector('.terminal-body');
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading-effect';
    loadingDiv.innerHTML = `
        <p style="color: var(--neon-cyan); margin-top: 20px; animation: blink 0.5s infinite;">
            ⟳ CALCULATING TRAJECTORY...
        </p>
    `;
    terminal.appendChild(loadingDiv);
    
    setTimeout(() => {
        loadingDiv.remove();
    }, 2000);
}

// ============================================
// FLOATING ELEMENTS INTERACTIVITY
// ============================================

function makeElementDraggable(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    element.style.cursor = 'grab';
    element.style.pointerEvents = 'auto';
    
    element.onmousedown = dragMouseDown;
    element.ontouchstart = dragTouchStart;

    function dragMouseDown(e) {
        e.preventDefault();
        element.style.cursor = 'grabbing';
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function dragTouchStart(e) {
        e.preventDefault();
        element.style.cursor = 'grabbing';
        const touch = e.touches[0];
        pos3 = touch.clientX;
        pos4 = touch.clientY;
        document.ontouchend = closeDragElement;
        document.ontouchmove = elementTouchDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function elementTouchDrag(e) {
        e.preventDefault();
        const touch = e.touches[0];
        pos1 = pos3 - touch.clientX;
        pos2 = pos4 - touch.clientY;
        pos3 = touch.clientX;
        pos4 = touch.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        element.style.cursor = 'grab';
        document.onmouseup = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.ontouchmove = null;
    }
}

// Make floating elements draggable
const astronaut = document.getElementById('astronaut');
const satellite = document.getElementById('satellite');

if (astronaut) makeElementDraggable(astronaut);
if (satellite) makeElementDraggable(satellite);

// ============================================
// EASTER EGG: KONAMI CODE
// ============================================

let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    // Change color scheme
    document.documentElement.style.setProperty('--neon-cyan', '#ff00ff');
    document.documentElement.style.setProperty('--neon-pink', '#00ffff');
    
    // Add rotation effect
    const terminal = document.querySelector('.terminal-window');
    terminal.style.animation = 'spin-once 2s ease-in-out';
    
    // Show message
    setTimeout(() => {
        alert('🎮 CHEAT CODE ACTIVATED!\n\nYou unlocked the secret 90s mode!');
    }, 500);
    
    // Restore after 5 seconds
    setTimeout(() => {
        location.reload();
    }, 5000);
}

// ============================================
// PARTICLE SYSTEM (optional enhancement)
// ============================================

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: var(--neon-cyan);
        pointer-events: none;
        z-index: 100;
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
        opacity: 0;
        animation: particle-fade 3s ease-out forwards;
        box-shadow: 0 0 5px var(--neon-cyan);
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 3000);
}

// Create particles occasionally
setInterval(() => {
    if (Math.random() > 0.7) {
        createParticle();
    }
}, 500);

// Add particle animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes particle-fade {
        0% {
            opacity: 0;
            transform: translateY(0) scale(0);
        }
        50% {
            opacity: 1;
            transform: translateY(-50px) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(0);
        }
    }
    
    @keyframes spin-once {
        0%, 100% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(360deg);
        }
    }
    
    @keyframes terminal-glitch {
        0%, 100% {
            transform: translate(0, 0);
            filter: hue-rotate(0deg);
        }
        20% {
            transform: translate(-5px, 5px);
            filter: hue-rotate(90deg);
        }
        40% {
            transform: translate(5px, -5px);
            filter: hue-rotate(180deg);
        }
        60% {
            transform: translate(-5px, -5px);
            filter: hue-rotate(270deg);
        }
        80% {
            transform: translate(5px, 5px);
            filter: hue-rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
    // Press 'H' to go home
    if (e.key.toLowerCase() === 'h' && !e.ctrlKey && !e.metaKey) {
        goHome();
    }
    
    // Press 'R' for random page
    if (e.key.toLowerCase() === 'r' && !e.ctrlKey && !e.metaKey) {
        randomPage();
    }
    
    // Press 'Escape' to show help
    if (e.key === 'Escape') {
        showKeyboardHelp();
    }
});

function showKeyboardHelp() {
    const helpText = `
╔════════════════════════════════════════╗
║     KEYBOARD SHORTCUTS DETECTED        ║
╠════════════════════════════════════════╣
║  H  →  Return to Home                  ║
║  R  →  Random Coordinates              ║
║  ↑↑↓↓←→←→BA  →  Secret Code           ║
║  ESC  →  Show this help                ║
╚════════════════════════════════════════╝
    `;
    
    console.log(`%c${helpText}`, 'color: #00ffff; font-family: monospace;');
    alert('Keyboard shortcuts are logged in the console!\n\nPress F12 to view.');
}

// ============================================
// CONSOLE MESSAGE (90s hacker aesthetic)
// ============================================

console.log(`
%c
 ██████╗ ██╗  ██╗ ██████╗ ██╗  ██╗
██╔════╝ ██║  ██║██╔═████╗██║  ██║
███████╗ ███████║██║██╔██║███████║
╚════██║ ╚════██║████╔╝██║╚════██║
██████╔╝      ██║╚██████╔╝     ██║
╚═════╝       ╚═╝ ╚═════╝      ╚═╝

%cWelcome to the void, space traveler.
%cSystem: MARS_NAVIGATION v2.404
%cStatus: OFFLINE
%c
Try these shortcuts:
• H = Home
• R = Random
• ↑↑↓↓←→←→BA = ???
`,
'color: #00ffff; font-size: 12px; font-family: monospace;',
'color: #ff00ff; font-size: 14px;',
'color: #39ff14; font-size: 12px;',
'color: #ff6b35; font-size: 12px;',
'color: #00ffff; font-size: 11px;'
);

// ============================================
// INITIALIZE
// ============================================

console.log('%c🚀 404 Page Loaded Successfully', 'color: #39ff14; font-size: 16px; font-weight: bold;');
console.log('%cHint: Try the Konami Code...', 'color: #ff00ff; font-style: italic;');
