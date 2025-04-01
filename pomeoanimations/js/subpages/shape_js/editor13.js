document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor13__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js13');
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
        transition: opacity 0.3s ease-in-out;
    opacity: 0;
}

.block13.active {
    opacity: 1;
    animation: pulse-explosion 1.5s ease-in-out forwards;
}

@keyframes pulse-explosion {
    0% { transform: scale(1); box-shadow: 0 0 30px rgba(255, 0, 255, 0.5); }
    25% { transform: scale(1.4); box-shadow: 0 0 50px rgba(255, 0, 255, 0.7); }
    50% { transform: scale(1); box-shadow: 0 0 30px rgba(255, 0, 255, 0.5); }
    75% { transform: scale(1.2); box-shadow: 0 0 40px rgba(255, 0, 255, 0.6); }
    100% { transform: scale(1); box-shadow: 0 0 30px rgba(255, 0, 255, 0.5); }
}

        `,
        js: `
document.addEventListener("DOMContentLoaded", function () {
  const block = document.querySelector(".block13");

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