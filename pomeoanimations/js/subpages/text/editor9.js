document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor9__tabs__button');
    const codeMenu = document.getElementById('codeMenu9');
    const codeInput = document.querySelector('.editor9__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<div class="editor9__animation-area__text"><span>POMEOSPACE</span></div>
        `,
        scss: `
.editor9__animation-area__text {
    font-size: 2rem;
    color: #fff;
    text-align: center;
    animation: rotate3D 3s infinite linear;

        }
        @keyframes rotate3D {
            0% {
                transform: rotateY(0deg);
            }
            50% {
                transform: rotateY(180deg);
            }
            100% {
                transform: rotateY(360deg);
            }
        }
        `,
        js: `

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