document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor5__tabs__button');
    const codeMenu = document.getElementById('shape-menu5');
    const codeInput = document.querySelector('.editor5__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
  <div class="block5"></div>
        `,
        scss: `
 .block5 {
        width: 10vw;
        height: 10vw;
        background-color: purple;
        display: block;
        aspect-ratio: 4 / 3;
        border-radius: 1.5rem;
        overflow: hidden;
        position: relative; 
        animation: flipIn 2s ease-out forwards infinite;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      
      
      }
      
     
    
      @keyframes flipIn {
        0% {
          transform: rotateX(-90deg);
          opacity: 0;
        }
        100% {
          transform: rotateX(0deg);
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
            tabButtons.forEach(btn => btn.classList.remove('editor5__tabs__button--active'));
            button.classList.add('editor5__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor5__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor5__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor5__code-menu--expanded');
            codeInput.classList.remove('editor5__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});