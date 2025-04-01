document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor4__tabs__button');
    const codeMenu = document.getElementById('shape-menu4');
    const codeInput = document.querySelector('.editor4__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
  <div class="block4"></div>
        `,
        scss: `
 .block4 {
        width: 10vw;
        height: 10vw;
        background-color: purple;
        display: block;
        aspect-ratio: 4 / 3;
        border-radius: 1.5rem;
        overflow: hidden;
        position: relative; 
        animation: dropIn 2s ease-out forwards infinite;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
       
      
     
      }
      
     
      @keyframes dropIn {
        0% {
          transform: translateY(-50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
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
            tabButtons.forEach(btn => btn.classList.remove('editor4__tabs__button--active'));
            button.classList.add('editor4__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor4__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor4__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor4__code-menu--expanded');
            codeInput.classList.remove('editor4__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});