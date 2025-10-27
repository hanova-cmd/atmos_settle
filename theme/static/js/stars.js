document.addEventListener('DOMContentLoaded', function() {
    console.log('Stars script loaded!');
    
    if (document.querySelector('.animated-stars')) {
        console.log('Stars already exist');
        return;
    }
    
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
    
    for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 8 + 4;
        const delay = Math.random() * 5;
        
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: white;
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.6 + 0.1};
            animation: starTwinkle ${duration}s infinite ${delay}s;
            box-shadow: 0 0 ${size * 3}px rgba(255, 255, 255, 0.5);
        `;
        animatedStars.appendChild(star);
    }
    
    if (!document.querySelector('#stars-style')) {
        const style = document.createElement('style');
        style.id = 'stars-style';
        style.textContent = `
            @keyframes starTwinkle {
                0%, 100% { 
                    opacity: 0.1; 
                    transform: scale(1);
                }
                50% { 
                    opacity: 0.8; 
                    transform: scale(1.3);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(animatedStars);
    console.log('Stars created successfully!');
});