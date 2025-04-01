document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor13__tabs__button');
    const codeMenu = document.getElementById('shape-menu13');
    const codeInput = document.querySelector('.editor13__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
  <div class="block13"></div>
        `,
        scss: `
  .block13 {
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
        animation: wave3DD 2s ease-in-out forwards infinite;
      
     
      }
      
     
      @keyframes wave3DD {
        0% {
          transform: rotateY(30deg) scale(0.8);
          opacity: 0;
        }
        25% {
          transform: rotateY(-20deg) scale(1.1);
          opacity: 0.8;
        }
        50% {
          transform: rotateY(15deg);
          opacity: 1;
        }
        75% {
          transform: rotateY(-10deg);
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
            tabButtons.forEach(btn => btn.classList.remove('editor13__tabs__button--active'));
            button.classList.add('editor13__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor13__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor13__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor13__code-menu--expanded');
            codeInput.classList.remove('editor13__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});