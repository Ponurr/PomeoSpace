document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor3__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js3');
    const codeInput = document.querySelector('.editor3__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<p class="hidden-text">POMEOSPACE</p>

        `,
        scss: `
 .hidden-text span {
        display: inline-block;
        opacity: 1;
        transition: opacity 0.3s;
      }
      

        `,
        js: `
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".hidden-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach(char => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
  });

  setInterval(() => {
    document.querySelectorAll(".hidden-text span").forEach(span => {
      span.style.opacity = Math.random() > 0.5 ? "0" : "1";
    });
  }, 300);
});

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor3__tabs__button--active'));
            button.classList.add('editor3__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor3__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor3__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor3__code-menu--expanded');
            codeInput.classList.remove('editor3__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});