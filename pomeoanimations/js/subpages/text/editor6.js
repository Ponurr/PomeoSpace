document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor6__tabs__button');
    const codeMenu = document.getElementById('codeMenu6');
    const codeInput = document.querySelector('.editor6__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<div class="editor6__animation-area__text"><span>POMEOSPACE</span></div>
        `,
        scss: `
.editor6__animation-area__text {
    font-size: 2rem;
    color: #fff;
    text-align: center;
    animation: bouncing 1.5s infinite ease-out;
        }
        @keyframes bouncing {
            0%, 100% {
                transform: translateY(0);
            }
            20% {
                transform: translateY(-10px);
            }
            40% {
                transform: translateY(5px);
            }
            60% {
                transform: translateY(-5px);
            }
            80% {
                transform: translateY(2px);
            }
        }
        `,
        js: `

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