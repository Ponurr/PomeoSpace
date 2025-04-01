document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor10__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js10');
    const codeInput = document.querySelector('.editor10__code-menu__input');

    
    const defaultCodes = {
        html: `
<p class="fire-text">POMEOSPACE</p>

        `,
        scss: `
  
  .fire-text span {
        display: inline-block;
        transition: transform 1s ease-out, opacity 1s ease-out;
      }
        `,
        js: `
      document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".fire-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach((char, index) => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
  });

  function explodeAndReset() {
    document.querySelectorAll(".fire-text span").forEach((span, index) => {
      let x = (Math.random() - 0.5) * 50; // Mniejszy rozrzut
      let y = (Math.random() - 0.5) * 80;
      let rotation = Math.random() * 40 - 20;

      setTimeout(() => {
        span.style.transition = "transform 1s ease-out, opacity 1s ease-out";
        span.style.transform = (!!linijka do skopiowania z kodu strony bo nie da sie jej tu wkleić!!)
        span.style.opacity = "0";
      }, index * 100); // Opóźnienie dla płynności
    });

    setTimeout(() => {
      document.querySelectorAll(".fire-text span").forEach((span, index) => {
        setTimeout(() => {
          span.style.transition = "transform 1s ease-in, opacity 1s ease-in";
          span.style.transform = "translate(0, 0) rotate(0deg)";
          span.style.opacity = "1";
        }, index * 50);
      });
    }, 4000); // Powrót po 4 sekundach
  }

  setInterval(explodeAndReset, 8000); // Efekt powtarza się co 8 sekund
  explodeAndReset(); 
});




        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor10__tabs__button--active'));
            button.classList.add('editor10__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor10__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor10__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor10__code-menu--expanded');
            codeInput.classList.remove('editor10__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});