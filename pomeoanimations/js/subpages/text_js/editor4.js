document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor4__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js4');
    const codeInput = document.querySelector('.editor4__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<p class="shaking-text">POMEOSPACE</p>

        `,
        scss: `
 .shaking-text span {
        display: inline-block;
        transition: transform 0.1s;
      }
      

        `,
        js: `
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".shaking-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach(char => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
  });

  setInterval(() => {
    document.querySelectorAll(".shaking-text span").forEach(span => {
      let x = (Math.random() - 0.5) * 10;
      let y = (Math.random() - 0.5) * 10;
    (!!!BRAKUJE JEDNEJ LINIJKI BO JEST NIE MOŻNA JEJ TU WKLEIĆ WEJSC DO KODU!!)
    });
  }, 100);
});


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