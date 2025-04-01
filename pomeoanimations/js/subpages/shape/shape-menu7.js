document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor7__tabs__button');
    const codeMenu = document.getElementById('shape-menu7');
    const codeInput = document.querySelector('.editor7__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
  <div class="block7"></div>
        `,
        scss: `
.block7 {
        width: 10vw;
        height: 10vw;
        background-color: purple;
        display: block;
        aspect-ratio: 4 / 3;
        border-radius: 1.5rem;
        overflow: hidden;
        position: relative; 
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        transform-style: preserve-3d;
        animation: glitchAppear 1.5s ease-out forwards infinite, glitchShadow 1.2s ease-in-out forwards infinite;
      
        
      }
      
     
      @keyframes glitchAppear {
        0% {
          transform: scale(0.5) translateY(-50px) skewX(10deg);
          opacity: 0;
          filter: blur(10px);
        }
        20% {
          transform: scale(1.1) translateY(5px) skewX(-5deg);
          opacity: 0.8;
          filter: blur(5px);
        }
        40% {
          transform: scale(0.9) translateY(-3px) skewX(3deg);
          opacity: 1;
          filter: blur(2px);
        }
        60% {
          transform: scale(1.02) translateX(2px);
          filter: none;
        }
        80% {
          transform: scale(0.98) translateX(-2px);
        }
        100% {
          transform: scale(1) translateX(0);
        }
      }
      
      @keyframes glitchShadow {
        0% {
          text-shadow: -2px 2px 5px rgba(0, 255, 255, 0.8), 2px -2px 5px rgba(255, 0, 255, 0.8);
        }
        50% {
          text-shadow: 2px -2px 5px rgba(0, 255, 255, 0.5), -2px 2px 5px rgba(255, 0, 255, 0.5);
        }
        100% {
          text-shadow: none;
        }
      }
      
        `,
        js: `

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor7__tabs__button--active'));
            button.classList.add('editor7__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor7__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor7__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor7__code-menu--expanded');
            codeInput.classList.remove('editor7__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});