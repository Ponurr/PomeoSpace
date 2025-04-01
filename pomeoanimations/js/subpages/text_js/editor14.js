document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor14__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js14');
    const codeInput = document.querySelector('.editor14__code-menu__input');

    const defaultCodes = {
        html: `
<p class="vortex-text">POMEOSPACE</p>

        `,
        scss: `
  .vortex-text span {
        display: inline-block;
        transition: transform 1.5s ease-in-out, opacity 1.5s ease-in-out;
      }
      

        `,
        js: `
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".vortex-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach((char, index) => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
  });

  function vortexEffect() {
    document.querySelectorAll(".vortex-text span").forEach((span, index) => {
      let angle = index * 15;
      let radius = index * 5;
      let x = Math.cos(angle) * radius;
      let y = Math.sin(angle) * radius;

      setTimeout(() => {
        span.style.transition = "transform 1.5s ease-in-out, opacity 1.5s ease-in-out";
        span.style.transform = (!!linijka do skopiowania z kodu strony bo nie da sie jej tu wkleić!!)
        span.style.opacity = "0";
      }, index * 100);
    });

    setTimeout(() => {
      document.querySelectorAll(".vortex-text span").forEach((span, index) => {
        setTimeout(() => {
          span.style.transition = "transform 1.5s ease-in-out, opacity 1.5s ease-in-out";
          span.style.transform = "translate(0, 0) rotate(0deg)";
          span.style.opacity = "1";
        }, index * 80);
      });
    }, 4000);
  }

  setInterval(vortexEffect, 8000);
  vortexEffect();
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