document.addEventListener('DOMContentLoaded', function() {
    const animatedStars = document.createElement('div');
    animatedStars.className = 'animated-stars';
    animatedStars.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 5;
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: white;
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.7 + 0.1};
            animation: starTwinkle ${duration}s infinite ${delay}s;
            box-shadow: 0 0 ${size * 2}px white;
        `;
        animatedStars.appendChild(star);
    }
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes starTwinkle {
            0%, 100% { 
                opacity: 0.1; 
                transform: scale(1);
            }
            50% { 
                opacity: 0.8; 
                transform: scale(1.2);
            }
        }
        
        .stars-bg {
            animation: bgTwinkle 20s infinite alternate;
        }
        
        @keyframes bgTwinkle {
            0% { background-position: 0 0, 50px 100px; }
            100% { background-position: 100px 50px, 0 200px; }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(animatedStars);
});