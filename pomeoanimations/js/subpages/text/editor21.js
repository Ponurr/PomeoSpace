document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor21__tabs__button');
    const codeMenu = document.getElementById('codeMenu21');
    const codeInput = document.querySelector('.editor21__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<div class="editor21__animation-area__text">
           
    <div class="keyboard">
      <span class="key">P</span>
      <span class="key">O</span>
      <span class="key">M</span>
      <span class="key">E</span>
      <span class="key">O</span>
    </div>
           
  </div>
        `,
        scss: `
.editor21__animation-area__text {
  
    font-family: "Poppins", sans-serif;
    font-weight: 900;
    font-size: 2vw;
     
    span {
        font-size: 4.5vw;
        display: inline-block;
        letter-spacing: -1vw;
        transition: transform 0.2s;
        color: #fff;
      }
      
      @keyframes pressDown1 {
        30%,
        40%,
        100% {
          transform: translateY(0);
        }
        35% {
          transform: translateY(10px);
        }
      }
      
      @keyframes pressDown2 {
        70%,
        80%,
        100% {
          transform: translateY(0);
        }
        75% {
          transform: translateY(10px);
        }
      }
      
      @keyframes pressDown3 {
        30%,
        40%,
        100% {
          transform: translateY(0);
        }
        35% {
          transform: translateY(10px);
        }
      }
      
      @keyframes pressDown4 {
        40%,
        50%,
        100% {
          transform: translateY(0);
        }
        45% {
          transform: translateY(10px);
        }
      }
      
      @keyframes pressDown5 {
        20%,
        30%,
        100% {
          transform: translateY(0);
        }
        25% {
          transform: translateY(10px);
        }
      }
      
      .key:nth-child(1) {
        animation: pressDown1 2s infinite;
      }
      
      .key:nth-child(2) {
        animation: pressDown2 3s infinite;
      }
      
      .key:nth-child(3) {
        animation: pressDown3 4s infinite;
      }
      
      .key:nth-child(4) {
        animation: pressDown4 2.5s infinite;
      }
      
      .key:nth-child(5) {
        animation: pressDown5 2.5s infinite;
      }
      
    }
        `,
        js: `

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor21__tabs__button--active'));
            button.classList.add('editor21__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor21__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor21__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor21__code-menu--expanded');
            codeInput.classList.remove('editor21__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});