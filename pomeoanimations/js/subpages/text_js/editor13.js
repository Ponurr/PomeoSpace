document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor13__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js13');
    const codeInput = document.querySelector('.editor13__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<p class="wavee-text">POMEOSPACE</p>

        `,
        scss: `
  .wavee-text span {
        display: inline-block;
        transition: transform 1s ease-in-out, opacity 1s ease-in-out;
      }

        `,
        js: `
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".wavee-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach((char, index) => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
  });

  function waveExplode() {
    document.querySelectorAll(".wavee-text span").forEach((span, index) => {
      let x = Math.sin(index) * 50;
      let y = Math.cos(index) * 50;
      let rotation = Math.random() * 40 - 20;

      setTimeout(() => {
        span.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
        span.style.transform = (!!linijka do skopiowania z kodu strony bo nie da sie jej tu wkleić!!)
        span.style.opacity = "0";
      }, index * 80);
    });

    setTimeout(() => {
      document.querySelectorAll(".wavee-text span").forEach((span, index) => {
        setTimeout(() => {
          span.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
          span.style.transform = "translate(0, 0) rotate(0deg)";
          span.style.opacity = "1";
        }, (text.length - index) * 80);
      });
    }, 4000);
  }

  setInterval(waveExplode, 8000);
  waveExplode();
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