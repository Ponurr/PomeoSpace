document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor10__tabs__button');
    const codeMenu = document.getElementById('shape-menu10');
    const codeInput = document.querySelector('.editor10__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
  <div class="block10"></div>
        `,
        scss: `
   .block10 {
        width: 10vw;
        height: 10vw;
        background-color: purple;
        display: block;
        aspect-ratio: 4 / 3;
        border-radius: 1.5rem;
        overflow: hidden;
        position: relative; 
        animation: waveEffect 2s ease-in-out forwards infinite;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      
      
     
      }
      
     
      @keyframes waveEffect {
        0% {
          transform: perspective(500px) rotateX(-30deg);
          opacity: 0;
        }
        50% {
          transform: perspective(500px) rotateX(10deg);
          opacity: 0.8;
        }
        100% {
          transform: perspective(500px) rotateX(0deg);
          opacity: 1;
        }
      }
        `,
        js: `

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor10__tabs__button--active'));
            button.classList.add('editor10__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor10__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor10__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor10__code-menu--expanded');
            codeInput.classList.remove('editor10__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});