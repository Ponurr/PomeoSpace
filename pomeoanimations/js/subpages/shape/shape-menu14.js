document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor14__tabs__button');
    const codeMenu = document.getElementById('shape-menu14');
    const codeInput = document.querySelector('.editor14__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
  <div class="block14"></div>
        `,
        scss: `
.block14 {
        width: 10vw;
        height: 10vw;
        background-color: purple;
        display: block;
        aspect-ratio: 4 / 3;
        border-radius: 1.5rem;
        overflow: hidden;
        position: relative; 
        transform-style: preserve-3d;
        animation: magicAppear 2s ease-out forwards infinite;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
     
      
   
      }
      
     
      @keyframes magicAppear {
        0% {
          transform: scale(0) rotateY(-180deg) translateY(-50px);
          opacity: 0;
          filter: blur(10px);
        }
        40% {
          transform: scale(1.2) rotateY(20deg) translateY(10px);
          opacity: 0.7;
          filter: blur(5px);
        }
        70% {
          transform: scale(0.9) rotateY(-10deg) translateY(-5px);
          opacity: 0.9;
          filter: blur(2px);
        }
        100% {
          transform: scale(1) rotateY(0deg) translateY(0);
          opacity: 1;
          filter: blur(0);
        }
      }
 
        `,
        js: `

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor14__tabs__button--active'));
            button.classList.add('editor14__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor14__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor14__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor14__code-menu--expanded');
            codeInput.classList.remove('editor14__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});