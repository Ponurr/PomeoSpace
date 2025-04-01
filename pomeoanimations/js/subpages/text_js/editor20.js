document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor20__tabs__button');
    const codeMenu = document.getElementById('codeMenu_js20');
    const codeInput = document.querySelector('.editor20__code-menu__input');

    const defaultCodes = {
        html: `
 <div class="flip-card">
                        <div class="flip-card__inner">
                            <div class="flip-card__front">POMEO</div>
                            <div class="flip-card__back">SPACE</div>
                        </div>
                    </div>

        `,
        scss: `
   .flip-card {
        width: 15vw;
        height: 10vw;
        perspective: 100vw;
        opacity: 0;
        transition: opacity 0.4s ease-in-out;
    }
    
    .flip-card--visible {
        opacity: 1;
    }
    
    .flip-card__inner {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 2.0s ease-in-out;
    }
    
    .flip-card--visible .flip-card__inner {
        transform: rotateY(180deg);
    }
    
    .flip-card__front, .flip-card__back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2vw;
        font-weight: bold;
    }
    
    .flip-card__front {
        background: #49006E;
        color: white;
    }
    
    .flip-card__back {
        background: #ffffff;
        color: #49006E;
        transform: rotateY(180deg);
    }
    

        `,
        js: `
const flipCardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('flip-card--visible');
    } else {
      entry.target.classList.remove('flip-card--visible');
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.flip-card').forEach(el => {
  flipCardObserver.observe(el);
});




        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor20__tabs__button--active'));
            button.classList.add('editor20__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor20__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor20__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor20__code-menu--expanded');
            codeInput.classList.remove('editor20__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});