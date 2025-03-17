/* ../js/overlay.js - tylko odległość i szybkość zmienione */
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.overlay');
    const numberOfDots = 60;

    function createDot() {
        const dot = document.createElement('div');
        dot.className = 'dot';
        
        // Random initial position
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        dot.style.left = `${startX}%`;
        dot.style.bottom = `${startY}%`;
        
        // Dostosowana odległość i szybkość
        const moveX = (Math.random() * 700 - 350); 
        const moveY = (Math.random() * 700 - 350); 
        const duration = Math.random() * 1 + 2; 
        
        // Create unique animation for movement
        const animationName = `move${Math.random().toString(36).substr(2, 9)}`;
        const keyframes = `
            @keyframes ${animationName} {
                0% { transform: translate(0, 0); }
                100% { transform: translate(${moveX}%, ${moveY}%); }
            }
        `;
        
        // Add keyframes to document
        const styleSheet = document.createElement('style');
        styleSheet.textContent = keyframes;
        document.head.appendChild(styleSheet);
        
        // Apply both animations
        dot.style.animation = `${animationName} ${duration}s linear infinite, fade ${duration}s linear infinite`;
        
        overlay.appendChild(dot);
        
        // Recreate dot after animation
        dot.addEventListener('animationend', () => {
            dot.remove();
            createDot();
        });
    }

    // Create initial dots
    for (let i = 0; i < numberOfDots; i++) {
        createDot();
    }
});