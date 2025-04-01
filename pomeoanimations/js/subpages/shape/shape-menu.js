document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor__tabs__button');
    const codeMenu = document.getElementById('shape-menu');
    const codeInput = document.querySelector('.editor__code-menu__input');

    const defaultCodes = {
        html: `
  <div class="block1"></div>
        `,
        scss: `
  .block1 {
        width: 10vw;
        height: 10vw;
        background-color: purple;
        display: block;
        aspect-ratio: 4 / 3;
        border-radius: 1.5rem;
        overflow: hidden;
        position: relative; 
        animation: fancyEnter 1s ease-out forwards;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        transform-style: preserve-3d;
        transition: transform 2s ease infinite, box-shadow 2s ease infinite;
      
        &:hover {
          transform: scale(1.15) rotateX(3deg) rotateY(3deg);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
        }
      }
      
     
      @keyframes fancyEnter {
        0% {
          opacity: 0;
          transform: scale(0.8) rotateX(10deg);
          filter: blur(19px);
        }
        100% {
          opacity: 1;
          transform: scale(1) rotateX(0deg);
          filter: blur(0);
        }
      }
      
    
      .shine {
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
          150deg,
          rgba(255, 255, 255, 0.15) 0%,
          rgba(255, 255, 255, 0.03) 60%,
          rgba(255, 255, 255, 0.15) 100%
        );
        transform: rotate(25deg) translateX(-100%);
        pointer-events: none;
        mix-blend-mode: screen;
        transition: transform 0.8s ease;
      
        .block1:hover & {
          transform: rotate(25deg) translateX(100%);
        }
      }
      
        `,
        js: `
function animateText() {
    const element = document.querySelector('.editor__animation-area__text');
    element.style.opacity = (element.style.opacity === '0' || !element.style.opacity) ? '1' : '0';
    setTimeout(animateText, 1000);
}
animateText();
        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor__tabs__button--active'));
            button.classList.add('editor__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor__code-menu--expanded');
            codeInput.classList.remove('editor__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});