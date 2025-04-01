document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor19__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js19');
    const codeInput = document.querySelector('.editor19__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
 <h2 class="smoke-text">POMEOSPACE (scroll)</h2>

        `,
        scss: `
  .smoke-text {
        font-size: 3vw;
        font-weight: bold;
        position: relative;
        opacity: 0;
        transition: opacity 0.4s ease-out;
    }
    
    .smoke-text::before {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        color: white;
        opacity: 0;
        filter: blur(20px);
        transition: opacity 0.8s ease-out, filter 0.8s ease-out;
    }
    
    .smoke-text--visible {
        opacity: 1;
    }
    
    .smoke-text--visible::before {
        opacity: 1;
        filter: blur(0);
    }
    

        `,
        js: `
const smokeTextObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('smoke-text--visible');
    } else {
      entry.target.classList.remove('smoke-text--visible');
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.smoke-text').forEach(el => {
  el.setAttribute('data-text', el.textContent);
  smokeTextObserver.observe(el);
});




        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor19__tabs__button--active'));
            button.classList.add('editor19__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor19__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor19__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor19__code-menu--expanded');
            codeInput.classList.remove('editor19__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});