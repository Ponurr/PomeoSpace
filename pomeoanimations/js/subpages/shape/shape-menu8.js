document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor8__tabs__button');
    const codeMenu = document.getElementById('shape-menu8');
    const codeInput = document.querySelector('.editor8__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
  <div class="block8"></div>
        `,
        scss: `
   .block8 {
        width: 10vw;
        height: 10vw;
        background-color: purple;
        display: block;
        aspect-ratio: 4 / 3;
        border-radius: 1.5rem;
        overflow: hidden;
        position: relative; 
        animation: bounceInElastic 2s cubic-bezier(0.5, -0.5, 0.3, 1.5) forwards infinite;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      
      
      }
      
   
      @keyframes bounceInElastic {
        0% {
          transform: scale(0.3) translateY(-100px);
          opacity: 0;
        }
        60% {
          transform: scale(1.1) translateY(10px);
          opacity: 1;
        }
        80% {
          transform: scale(0.95) translateY(-5px);
        }
        100% {
          transform: scale(1) translateY(0);
        }
      }  
    
        `,
        js: `

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor8__tabs__button--active'));
            button.classList.add('editor8__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor8__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor8__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor8__code-menu--expanded');
            codeInput.classList.remove('editor8__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});