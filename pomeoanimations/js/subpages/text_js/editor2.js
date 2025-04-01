document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor2__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js2');
    const codeInput = document.querySelector('.editor2__code-menu__input');

   
    const defaultCodes = {
        html: `
<p class="wave-text">POMEOSPACE</p>

        `,
        scss: `
 @keyframes wave {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      
      .wave-text span {
        display: inline-block;
        animation: wave 1.5s infinite ease-in-out;
        animation-delay: calc(var(--delay) * 0.1s);
      }
        `,
        js: `
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".wave-text");
    const text = textElement.innerText;
    textElement.innerHTML = "";
    
    text.split("").forEach((char, index) => {
      let span = document.createElement("span");
      span.textContent = char;
      span.style.setProperty("--delay", index);
      textElement.appendChild(span);
    });
  });

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor2__tabs__button--active'));
            button.classList.add('editor2__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor2__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor2__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor2__code-menu--expanded');
            codeInput.classList.remove('editor2__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});