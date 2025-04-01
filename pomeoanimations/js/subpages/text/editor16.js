document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor16__tabs__button');
    const codeMenu = document.getElementById('codeMenu16');
    const codeInput = document.querySelector('.editor16__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<div class="editor16__animation-area__text">
      <span>POMEO</span>
</div>
        `,
        scss: `
.editor16__animation-area__text {
    font-weight: 900;
    font-size: 2vw;
    font-family: "ponur";
    animation: jump 2s ease 0s infinite normal forwards;
    color: #fff;
  
    span {
      
      display: inline-block; 
    }
  
    @keyframes jump {
      0%,
      100% {
        transform: translateY(0) rotate(0);
        transform-origin: 50% 50%;
      }
      15% {
        transform: translateY(-30px) rotate(-6deg);
      }
      30% {
        transform: translateY(15px) rotate(6deg);
      }
      45% {
        transform: translateY(-15px) rotate(-3.6deg);
      }
      60% {
        transform: translateY(9px) rotate(2.4deg);
      }
      75% {
        transform: translateY(-6px) rotate(-1.2deg);
      }
    }
  }
        `,
        js: `

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor16__tabs__button--active'));
            button.classList.add('editor16__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor16__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor16__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor16__code-menu--expanded');
            codeInput.classList.remove('editor16__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});