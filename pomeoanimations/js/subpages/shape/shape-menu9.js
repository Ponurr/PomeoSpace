document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor9__tabs__button');
    const codeMenu = document.getElementById('shape-menu9');
    const codeInput = document.querySelector('.editor9__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
  <div class="block9"></div>
        `,
        scss: `
  .block9 {
        width: 10vw;
        height: 10vw;
        background-color: purple;
        display: block;
        aspect-ratio: 4 / 3;
        border-radius: 1.5rem;
        overflow: hidden;
        position: relative; 
        transform-style: preserve-3d;
        animation: flip3D 2s ease-out forwards infinite;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        
      
     
      }
      
     
      @keyframes flip3D {
        0% {
          transform: rotateY(90deg) scale(0.8);
          opacity: 0;
        }
        50% {
          transform: rotateY(-10deg) scale(1.05);
          opacity: 1;
        }
        100% {
          transform: rotateY(0) scale(1);
        }
      }
      
      
        `,
        js: `

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor9__tabs__button--active'));
            button.classList.add('editor9__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor9__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor9__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor9__code-menu--expanded');
            codeInput.classList.remove('editor9__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});