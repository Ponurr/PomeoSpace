document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor12__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js12');
    const codeInput = document.querySelector('.editor12__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<p class="ash-text">POMEOSPACE</p>

        `,
        scss: `
   .ash-text span {
        display: inline-block;
        transition: transform 1.5s ease-out, opacity 1.5s ease-out;
      }

        `,
        js: `
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".ash-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach((char, index) => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
  });

  function burnAndRebuild() {
    document.querySelectorAll(".ash-text span").forEach((span, index) => {
      let y = Math.random() * 100 + 50; // Opadanie w dół
      let rotation = Math.random() * 60 - 30;
      let delay = index * 50; // Stopniowe spalanie liter

      setTimeout(() => {
        span.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-out";
        span.style.transform = (!!linijka do skopiowania z kodu strony bo nie da sie jej tu wkleić!!)
        span.style.opacity = "0";
      }, delay);
    });

    setTimeout(() => {
      document.querySelectorAll(".ash-text span").forEach((span, index) => {
        setTimeout(() => {
          span.style.transition = "transform 2s ease-in, opacity 2s ease-in";
          span.style.transform = "translateY(0) rotate(0deg)";
          span.style.opacity = "1";
        }, index * 80);
      });
    }, 4000);
  }

  setInterval(burnAndRebuild, 8000);
  burnAndRebuild();
});




        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor12__tabs__button--active'));
            button.classList.add('editor12__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor12__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor12__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor12__code-menu--expanded');
            codeInput.classList.remove('editor12__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});