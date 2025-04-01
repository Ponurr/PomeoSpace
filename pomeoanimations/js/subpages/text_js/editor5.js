document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor5__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js5');
    const codeInput = document.querySelector('.editor5__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<p class="blur-text">POMEOSPACE</p>

        `,
        scss: `
  .blur-text span {
        display: inline-block;
        transition: filter 0.2s, opacity 0.2s;
      }
      

        `,
        js: `
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".blur-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach(char => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
  });

  setInterval(() => {
    document.querySelectorAll(".blur-text span").forEach(span => {
      span.style.filter = Math.random() > 0.5 ? "blur(3px)" : "blur(0px)";
      span.style.opacity = Math.random() > 0.5 ? "0.5" : "1";
    });
  }, 300);
});


        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor5__tabs__button--active'));
            button.classList.add('editor5__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor5__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor5__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor5__code-menu--expanded');
            codeInput.classList.remove('editor5__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});