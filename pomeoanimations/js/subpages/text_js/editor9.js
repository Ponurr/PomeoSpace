document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor9__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js9');
    const codeInput = document.querySelector('.editor9__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<p class="wavy-3d-text">PONURPONURPONUR (SCROLL)</p>

        `,
        scss: `
 .wavy-3d-text span {
        display: inline-block;
        transform: translate3d(0, 0, 0);
        transition: transform 0.1s;
      }

        `,
        js: `
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".wavy-3d-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach((char, index) => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
    span.style.transform = (!!linijka do skopiowania z kodu bo nie da się jej tu wkleić!!)
  });

  window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY / 10;
    document.querySelectorAll(".wavy-3d-text span").forEach((span, index) => {
      span.style.transform = (!!linijka do skopiowania z kodu bo nie da się jej tu wkleić!!)
    });
  });
});




        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor9__tabs__button--active'));
            button.classList.add('editor9__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor9__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor9__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor9__code-menu--expanded');
            codeInput.classList.remove('editor9__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});