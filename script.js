const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const result = document.getElementById('result');
const heartsContainer = document.getElementById('hearts');

let heartsStarted = false;

yesBtn.addEventListener('click', () => {
    result.textContent = "YAYYY 💕 I knew it! Happy Valentine’s Week baby ❤️";
    if (!heartsStarted) {
        startHearts();
        heartsStarted = true;
    }
});

// noBtn.addEventListener('mouseover', () => {
//     const x = Math.random() * 200 - 100;
//     const y = Math.random() * 200 - 100;
//     noBtn.style.transform = `translate(${x}px, ${y}px)`;
// });

const dangerRadius = 80; // px (how close is "too close")

document.addEventListener('mousemove', (e) => {
    const rect = noBtn.getBoundingClientRect();

    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    const dx = e.clientX - btnCenterX;
    const dy = e.clientY - btnCenterY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < dangerRadius) {
        moveNoButton(dx, dy);
    }
});

function moveNoButton(dx, dy) {
    const moveX = (dx > 0 ? -1 : 1) * (50 + Math.random() * 100);
    const moveY = (dy > 0 ? -1 : 1) * (30 + Math.random() * 80);

    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}


function startHearts() {
    setInterval(createHeart, 300);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 3 + Math.random() * 2 + 's';

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
