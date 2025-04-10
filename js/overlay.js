
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.overlay');
    const numberOfDots = 60;

    function createDot() {
        const dot = document.createElement('div');
        dot.className = 'dot';
        
      
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        dot.style.left = `${startX}%`;
        dot.style.bottom = `${startY}%`;
        
      
        const moveX = (Math.random() * 700 - 350); 
        const moveY = (Math.random() * 700 - 350); 
        const duration = Math.random() * 1 + 2; 
        
      
        const animationName = `move${Math.random().toString(36).substr(2, 9)}`;
        const keyframes = `
            @keyframes ${animationName} {
                0% { transform: translate(0, 0); }
                100% { transform: translate(${moveX}%, ${moveY}%); }
            }
        `;
        
     
        const styleSheet = document.createElement('style');
        styleSheet.textContent = keyframes;
        document.head.appendChild(styleSheet);
        
      
        dot.style.animation = `${animationName} ${duration}s linear infinite, fade ${duration}s linear infinite`;
        
        overlay.appendChild(dot);
        
      
        dot.addEventListener('animationend', () => {
            dot.remove();
            createDot();
        });
    }

  
    for (let i = 0; i < numberOfDots; i++) {
        createDot();
    }
});