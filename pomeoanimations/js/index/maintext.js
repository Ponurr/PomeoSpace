const explodeTextObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('text-anim-explode--visible');

            const letters = el.querySelectorAll('.text-anim-explode__char');
            letters.forEach((letter, index) => {
                letter.style.transitionDelay = `${index * 50}ms`;
            });
        } else {
            
            entry.target.classList.remove('text-anim-explode--visible');
            entry.target.querySelectorAll('.text-anim-explode__char').forEach(letter => {
                letter.style.transitionDelay = '0ms';
            });
        }
    });
}, { threshold: 0.4 });

document.querySelectorAll('[data-text-anim-explode]').forEach(el => {
    const originalText = el.textContent.trim();
    el.innerHTML = '';

    originalText.split('').forEach(char => {
        const span = document.createElement('span');
        span.classList.add('text-anim-explode__char');
        span.textContent = char === ' ' ? '\u00A0' : char; 
        el.appendChild(span);
    });

    explodeTextObserver.observe(el);
});
