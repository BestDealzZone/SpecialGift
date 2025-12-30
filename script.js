// 1. Floating Hearts Background Logic
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    const hearts = ['❤️', '💖', '💗', '💓', '✨'];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    
    const bg = document.getElementById('bgHearts');
    if (bg) {
        bg.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}
setInterval(createHeart, 400);

// 2. Navigation Logic
let revealsDone = 0;

function nextScreen(current, next) {
    const currentElem = document.getElementById(`screen${current}`);
    const nextElem = document.getElementById(`screen${next}`);
    
    if (currentElem && nextElem) {
        currentElem.classList.remove('active');
        nextElem.classList.add('active');
    }

    if (next === 2) startMeter();
}

// 3. Cuteness Meter Logic
function startMeter() {
    let progress = 0;
    const bar = document.getElementById('progress');
    const text = document.getElementById('percentage');
    const warning = document.getElementById('warning');
    
    let interval = setInterval(() => {
        progress += 2;
        if (bar) bar.style.width = (progress > 100 ? 100 : progress) + '%';
        if (text) text.innerText = progress + '%';

        // Neon Warning appears at 100%
        if (progress >= 100 && warning) {
            warning.classList.remove('hidden');
        }

        // Finish at 130%
        if (progress >= 130) {
            clearInterval(interval);
            setTimeout(() => nextScreen(2, 3), 1200);
        }
    }, 60); 
}

// 4. Reveal Heart Buttons Logic
function reveal(btn, message) {
    if (!btn.classList.contains('revealed')) {
        btn.innerText = message;
        btn.classList.add('revealed');
        revealsDone++;
    }
    
    if (revealsDone >= 5) {
        const seeMoreBtn = document.getElementById('seeMore');
        if (seeMoreBtn) seeMoreBtn.classList.remove('hidden');
    }
}

// 5. Pink Gift Card Flip Logic (Updated)
function flipCard() {
    const cardInner = document.getElementById('card-inner');
    if (cardInner) {
        cardInner.classList.toggle('is-flipped');
    }
}