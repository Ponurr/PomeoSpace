document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor18__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js18');
    const codeInput = document.querySelector('.editor18__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
    <div class="slide-in">
                        <h2>POMEOSPACE (scroll)</h2>
                    </div>

        `,
        scss: `
  .slide-in {
        opacity: 0;
        transform: translateX(-10vw);
        transition: transform 0.6s ease-out, opacity 0.6s ease-out;
    }
    
    .slide-in--visible {
        opacity: 1;
        transform: translateX(0);
    }

        `,
        js: `
const slideInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in--visible');
    } else {
      entry.target.classList.remove('slide-in--visible');
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.slide-in').forEach(el => {
  slideInObserver.observe(el);
});




        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor18__tabs__button--active'));
            button.classList.add('editor18__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor18__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor18__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor18__code-menu--expanded');
            codeInput.classList.remove('editor18__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});