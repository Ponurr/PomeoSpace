document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor7__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js7');
    const codeInput = document.querySelector('.editor7__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
 <div class="block7"></div>

        `,
        scss: `


.block7 {
        width: 10vw;
        height: 10vw;
        background-color: purple;
        display: block;
        aspect-ratio: 4 / 3;
        border-radius: 1.5rem;
        overflow: hidden;
        position: relative; 
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        transition: transform 0.7s ease-in-out, opacity 0.7s;
        opacity: 0;
        transform: translateY(50px);
    }
    
    .block7.active {
        opacity: 1;
        transform: translateY(0);
    }

        `,
        js: `
document.addEventListener("DOMContentLoaded", function () {
  const block = document.querySelector(".block7");

  function checkPosition() {
      const blockRect = block.getBoundingClientRect();
      const triggerBottom = window.innerHeight * 0.8;
      const triggerTop = window.innerHeight * 0.2;

      if (blockRect.top < triggerBottom && blockRect.bottom > triggerTop) {
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
            tabButtons.forEach(btn => btn.classList.remove('editor7__tabs__button--active'));
            button.classList.add('editor7__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor7__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor7__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor7__code-menu--expanded');
            codeInput.classList.remove('editor7__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});