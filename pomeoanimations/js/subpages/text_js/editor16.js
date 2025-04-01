document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor16__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js16');
    const codeInput = document.querySelector('.editor16__code-menu__input');

    
    const defaultCodes = {
        html: `
<h2 class="text-anim-explode" data-text-anim-explode>POMEOSPACE (scroll)</h2>

        `,
        scss: `
 .text-anim-explode {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.4s ease, transform 0.4s ease;

    &__char {
        opacity: 0;
        transform: translateY(80px) scale(0.8) rotate(-10deg);
        display: inline-block;
        transition: transform 0.6s ease, opacity 0.6s ease;
    }

    &--visible {
        opacity: 1;
        transform: translateY(0);

        .text-anim-explode__char {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(0);
        }
    }

        `,
        js: `
const explodeTextObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.classList.add('text-anim-explode--visible');

      const letters = el.querySelectorAll('.text-anim-explode__char');
      letters.forEach((letter, index) => {
        letter.style.transitionDelay = (!!linijka do skopiowania z kodu strony bo nie da sie jej tu wkleić!!)

      });
    } else {
      // Gdy element znika z ekranu – resetujemy animację
      entry.target.classList.remove('text-anim-explode--visible');
      entry.target.querySelectorAll('.text-anim-explode__char').forEach(letter => {
        letter.style.transitionDelay = '0ms'; // Resetujemy opóźnienie
      });
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('[data-text-anim-explode]').forEach(el => {
  const originalText = el.textContent.trim();
  el.innerHTML = '';

  originalText.split('').forEach(char => {
    const span = document.createElement('span');
    span.classList.add('text-anim-explode__char');
    span.textContent = char === ' ' ? (!!linijka do skopiowania z kodu strony bo nie da sie jej tu wkleić!!)
 : char; // Uwzględnia spacje
    el.appendChild(span);
  });

  explodeTextObserver.observe(el);
});



        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor16__tabs__button--active'));
            button.classList.add('editor16__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor16__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor16__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor16__code-menu--expanded');
            codeInput.classList.remove('editor16__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});