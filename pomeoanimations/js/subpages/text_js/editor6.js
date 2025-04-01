document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor6__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js6');
    const codeInput = document.querySelector('.editor6__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<p class="looping-text">POMEOSPACE</p>

        `,
        scss: `
  .looping-text span {
        display: inline-block;
        transform: translateX(-20px);
        opacity: 0;
        transition: transform 0.5s, opacity 0.5s;
      }
      

        `,
        js: `
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".looping-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach((char, index) => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);

    setTimeout(() => {
      span.style.transform = "translateX(0)";
      span.style.opacity = "1";
    }, index * 100);
  });

  setInterval(() => {
    document.querySelectorAll(".looping-text span").forEach((span, index) => {
      setTimeout(() => {
        span.style.transform = "translateX(-20px)";
        span.style.opacity = "0";
      }, index * 100);
      setTimeout(() => {
        span.style.transform = "translateX(0)";
        span.style.opacity = "1";
      }, index * 100 + 1000);
    });
  }, 3000);
});

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor6__tabs__button--active'));
            button.classList.add('editor6__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor6__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor6__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor6__code-menu--expanded');
            codeInput.classList.remove('editor6__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});