document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor7__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js7');
    const codeInput = document.querySelector('.editor7__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<p class="magnetic-text">POMEOSPACE (mouse)</p>

        `,
        scss: `


.magnetic-text span {
        display: inline-block;
        transition: transform 0.2s ease-out;
      }

        `,
        js: `
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".magnetic-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach(char => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
  });

  document.addEventListener("mousemove", (event) => {
    document.querySelectorAll(".magnetic-text span").forEach(span => {
      let rect = span.getBoundingClientRect();
      let dx = event.clientX - (rect.left + rect.width / 2);
      let dy = event.clientY - (rect.top + rect.height / 2);
      let distance = Math.sqrt(dx * dx + dy * dy);

      let force = Math.min(100 / distance, 3);
      span.style.transform = (!!brakuje tu jednej lini bo nie da sie jej tu wkleic!!)
    });
  });

  document.addEventListener("mouseleave", () => {
    document.querySelectorAll(".magnetic-text span").forEach(span => {
      span.style.transform = "translate(0, 0)";
    });
  });
});


        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor7__tabs__button--active'));
            button.classList.add('editor7__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor7__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor7__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor7__code-menu--expanded');
            codeInput.classList.remove('editor7__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});