document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor14__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js14');
    const codeInput = document.querySelector('.editor14__code-menu__input');

    const defaultCodes = {
        html: `
 <div class="block14"></div>

        `,
        scss: `
  .block14 {
        width: 10vw;
        height: 10vw;
        background-color: purple;
        display: block;
        aspect-ratio: 4 / 3;
        border-radius: 1.5rem;
        overflow: hidden;
        position: relative; 
        transition: opacity 0.3s ease-in-out;
        opacity: 0;
    }
    
    .block14.active {
        opacity: 1;
        animation: teleport-fade 2s ease-in-out forwards infinite;
    }
    
    @keyframes teleport-fade {
        0% { transform: scale(1); opacity: 1; }
        40% { transform: scale(0.1); opacity: 0; }
        50% { transform: translateX(0px) translateY(-200px) scale(0.1); opacity: 0; }
        90% { transform: translateX(0px) translateY(-200px) scale(1.1); opacity: 1; }
        100% { transform: translateX(0px) translateY(-200px) scale(1); opacity: 1; }
    }
    }

        `,
        js: `
document.addEventListener("DOMContentLoaded", function () {
  const block = document.querySelector(".block14");

  function checkPosition() {
      const blockRect = block.getBoundingClientRect();
      const triggerBottom = window.innerHeight * 0.8;

      if (blockRect.top < triggerBottom) {
          block.classList.add("active");
      } else {
          block.classList.remove("active");
      }
  }

  window.addEventListener("scroll", checkPosition);
  checkPosition();
});





        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor14__tabs__button--active'));
            button.classList.add('editor14__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor14__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor14__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor14__code-menu--expanded');
            codeInput.classList.remove('editor14__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});