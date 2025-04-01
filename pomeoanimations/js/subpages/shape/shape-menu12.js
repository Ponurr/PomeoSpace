document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor12__tabs__button');
    const codeMenu = document.getElementById('shape-menu12');
    const codeInput = document.querySelector('.editor12__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
  <div class="block12"></div>
        `,
        scss: `
    .block12 {
        width: 10vw;
        height: 10vw;
        background-color: purple;
        display: block;
        aspect-ratio: 4 / 3;
        border-radius: 1.5rem;
        overflow: hidden;
        position: relative; 
        animation: shakeIn 2s ease-out forwards infinite;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      
      }
      
      @keyframes shakeIn {
        0% {
          transform: translateX(-100px);
          opacity: 0;
        }
        30% {
          transform: translateX(10px);
          opacity: 1;
        }
        50% {
          transform: translateX(-5px);
        }
        70% {
          transform: translateX(2px);
        }
        100% {
          transform: translateX(0);
        }
      }  
        `,
        js: `

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor12__tabs__button--active'));
            button.classList.add('editor12__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor12__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor12__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor12__code-menu--expanded');
            codeInput.classList.remove('editor12__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});