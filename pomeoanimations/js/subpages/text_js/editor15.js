document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor15__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js15');
    const codeInput = document.querySelector('.editor15__code-menu__input');

    
    const defaultCodes = {
        html: `
<div class="glitch-typewriter">
                    <span id="glitch__text"></span>
                  </div>

        `,
        scss: `
  .glitch-typewriter {
        font-family: monospace;
        font-size: 2rem;
        color: #fff;
        background: #000;
        padding: 1rem;
        width: fit-content;
        overflow: hidden;
        white-space: nowrap;
        position: relative;
      
        &::after {
          content: '|';
          position: absolute;
          right: 0;
          animation: blink 0.7s infinite;
        }
      
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      
        .glitch-letter {
          display: inline-block;
          position: relative;
      
          &::before, &::after {
            content: attr(data-char);
            position: absolute;
            top: 0;
            left: 0;
            color: #0ff;
            opacity: 0.6;
            transform: translateX(1px);
          }
      
          &::after {
            color: #f0f;
            transform: translateX(-1px);
          }
        }
      }
      

        `,
        js: `
const text = "POMEOSPACE";
const container = document.getElementById("glitch__text");

function typeGlitch(callback) {
  container.innerHTML = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      const char = text[i];
      const span = document.createElement("span");
      span.className = "glitch-letter";
      span.setAttribute("data-char", char);
      span.textContent = char;
      container.appendChild(span);
      i++;
      setTimeout(type, 80 + Math.random() * 100);
    } else {
      // Po zakończeniu pisania – czekaj 5s i zresetuj
      setTimeout(() => {
        container.innerHTML = "";
        // wywołujemy ponownie typeGlitch – zapętlamy animację
        typeGlitch(callback);
      }, 4000);
    }
  }

  type();
}

// Startujemy zapętloną animację
typeGlitch();




        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor15__tabs__button--active'));
            button.classList.add('editor15__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor15__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor15__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor15__code-menu--expanded');
            codeInput.classList.remove('editor15__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});