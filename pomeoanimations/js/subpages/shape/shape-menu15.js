document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor15__tabs__button');
    const codeMenu = document.getElementById('shape-menu15');
    const codeInput = document.querySelector('.editor15__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
  <div class="block15"></div>
        `,
        scss: `
  .block15 {
        width: 10vw;
        height: 10vw;
        background-color: purple;
        display: block;
        aspect-ratio: 4 / 3;
        border-radius: 1.5rem;
        overflow: hidden;
        position: relative; 
        transform-style: preserve-3d;
        animation: superEnter 2s ease-out forwards infinite;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
     
      
   
      }
      @keyframes superEnter {
        0% {
          transform: translateX(-200px) rotate(-30deg) scale(0.5);
          opacity: 0;
          filter: blur(10px);
        }
        50% {
          transform: translateX(10px) rotate(10deg) scale(1.1);
          opacity: 0.8;
          filter: blur(3px);
        }
        70% {
          transform: translateX(-5px) rotate(-5deg) scale(1);
          opacity: 1;
          filter: blur(0);
        }
        85% {
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
            tabButtons.forEach(btn => btn.classList.remove('editor15__tabs__button--active'));
            button.classList.add('editor15__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor15__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor15__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor15__code-menu--expanded');
            codeInput.classList.remove('editor15__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});