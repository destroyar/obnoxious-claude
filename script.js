// Main script - Still obnoxious, but your eyes will thank you
document.addEventListener('DOMContentLoaded', () => {
    console.log('🔥🔥🔥 WELCOME TO THE PARTY 🔥🔥🔥');
    
    // Click tracking
    let clickCount = 0;
    const achievements = [
        { clicks: 1, emoji: '🎯', title: 'First Blood!', msg: 'You figured out buttons!' },
        { clicks: 5, emoji: '🔥', title: 'Warming Up', msg: 'Keep going...' },
        { clicks: 10, emoji: '💪', title: 'Dedicated', msg: 'You actually like this?' },
        { clicks: 25, emoji: '🤯', title: 'Click Addict', msg: 'Maybe go outside?' },
        { clicks: 50, emoji: '👑', title: 'Click Royalty', msg: 'Your mouse fears you' },
        { clicks: 100, emoji: '🦄', title: 'Legendary', msg: 'You need help' },
        { clicks: 200, emoji: '💀', title: 'Click God', msg: 'RIP your mouse' },
        { clicks: 420, emoji: '🌿', title: 'Nice', msg: 'lmao' },
        { clicks: 500, emoji: '🌌', title: 'Transcendent', msg: 'You have no life' },
        { clicks: 1000, emoji: '🏆', title: 'THE CHAMPION', msg: 'Go touch grass immediately' }
    ];
    let unlockedAchievements = [];
    
    // Add marquee
    const marquee = document.createElement('div');
    marquee.className = 'marquee';
    marquee.innerHTML = '<span>🚨 WOW!!! 🚨 AMAZING!!! 🚨 CLICK THE BUTTON!!! 🚨 YOU WON\'T BELIEVE IT!!! 🚨 FREE STUFF!!! 🚨 NOT A SCAM!!! 🚨 100% LEGIT!!! 🚨 DOCTORS HATE THIS!!! 🚨</span>';
    document.body.prepend(marquee);
    
    // Add click counter
    const counter = document.createElement('div');
    counter.className = 'click-counter';
    counter.innerHTML = 'Clicks: <span class="count">0</span>';
    document.querySelector('.container').appendChild(counter);
    
    // Create particle container
    const particleContainer = document.createElement('div');
    particleContainer.id = 'particles';
    document.body.prepend(particleContainer);
    
    // Generate floating particles
    for (let i = 0; i < 60; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
        particleContainer.appendChild(particle);
    }
    
    // Emoji rain
    const emojis = ['🔥', '💯', '🎉', '🚀', '💥', '⭐', '🌈', '💀', '👀', '😂', '🤯', '💩', '🦄', '🍕', '🌮', '🎸', '💎'];
    
    function createEmojiRain() {
        const emoji = document.createElement('div');
        emoji.className = 'emoji-rain';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + '%';
        emoji.style.animationDuration = (Math.random() * 3 + 3) + 's';
        document.body.appendChild(emoji);
        setTimeout(() => emoji.remove(), 6000);
    }
    
    setInterval(createEmojiRain, 300);
    
    // Mouse trail
    document.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        trail.className = 'particle';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.animation = 'none';
        trail.style.transition = 'all 0.5s ease';
        trail.style.opacity = '1';
        trail.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        trail.style.width = '10px';
        trail.style.height = '10px';
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.style.opacity = '0';
            trail.style.transform = 'scale(3)';
        }, 10);
        
        setTimeout(() => trail.remove(), 500);
    });
    
    // Show achievement
    function showAchievement(a) {
        const popup = document.createElement('div');
        popup.className = 'achievement';
        popup.innerHTML = `<div class="emoji">${a.emoji}</div><h2>${a.title}</h2><p>${a.msg}</p>`;
        document.body.appendChild(popup);
        
        // Confetti
        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                const c = document.createElement('div');
                c.textContent = ['🎉', '✨', '💫', '🌟', '⭐'][Math.floor(Math.random() * 5)];
                c.style.cssText = 'position:fixed;left:50%;top:50%;font-size:2rem;transition:all 1s ease-out;z-index:10001;pointer-events:none;';
                document.body.appendChild(c);
                const angle = (i / 40) * Math.PI * 2;
                const dist = 100 + Math.random() * 150;
                setTimeout(() => {
                    c.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px)`;
                    c.style.opacity = '0';
                }, 10);
                setTimeout(() => c.remove(), 1000);
            }, i * 15);
        }
        
        setTimeout(() => popup.remove(), 3000);
    }
    
    // Button handler
    const button = document.querySelector('.cta-button');
    if (button) {
        button.addEventListener('click', () => {
            clickCount++;
            document.querySelector('.count').textContent = clickCount;
            
            // Check achievements
            const newA = achievements.find(a => a.clicks === clickCount && !unlockedAchievements.includes(a.clicks));
            if (newA) {
                unlockedAchievements.push(newA.clicks);
                showAchievement(newA);
            }
            
            // Emoji burst
            for (let i = 0; i < 12; i++) {
                const burst = document.createElement('div');
                burst.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                burst.style.cssText = 'position:fixed;left:50%;top:60%;font-size:2rem;transition:all 0.8s ease-out;z-index:999;pointer-events:none;';
                document.body.appendChild(burst);
                const angle = (i / 12) * Math.PI * 2;
                const dist = 80 + Math.random() * 60;
                setTimeout(() => {
                    burst.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px) scale(0)`;
                    burst.style.opacity = '0';
                }, 10);
                setTimeout(() => burst.remove(), 800);
            }
        });
        
        // Sometimes the button runs away
        button.addEventListener('mouseenter', () => {
            if (Math.random() > 0.8) {
                button.style.transform = `translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 100}px)`;
                setTimeout(() => button.style.transform = '', 500);
            }
        });
    }
    
    // Double-click title easter egg
    const title = document.querySelector('h1');
    const titles = ['🔥 Hello World! 🔥', '🌮 TACO TIME! 🌮', '💀 SEND HELP 💀', '🦄 MAGICAL! 🦄', '🍕 PIZZA TIME! 🍕'];
    let titleIndex = 0;
    title?.addEventListener('dblclick', () => {
        titleIndex = (titleIndex + 1) % titles.length;
        title.textContent = titles[titleIndex];
    });
    
    // Console secrets
    console.log('%c🎮 SECRETS:', 'font-size:16px;font-weight:bold;color:#ff00ff;');
    console.log('%c  • Double-click the title', 'color:#00ffff;');
    console.log('%c  • Keep clicking for achievements', 'color:#00ffff;');
    console.log('%c  • Try to catch the button 👀', 'color:#00ffff;');
});
