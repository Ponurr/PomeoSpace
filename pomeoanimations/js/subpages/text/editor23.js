document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor23__tabs__button');
    const codeMenu = document.getElementById('codeMenu23');
    const codeInput = document.querySelector('.editor23__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `

 <div class="editor23__animation-area__text"> <div class="main">
            <span>P</span>
            <span class="letter"></span>
            <span>M</span>
            <span>E</span>
            <span>O</span>
 </div></div>
        `,
        scss: `
.editor23__animation-area__text {
   

    font-family: "Poppins", sans-serif;
    font-weight: 900;
    font-size: 2vw;
    
    span{
        color: #fff;
        margin: 0 15px;
        line-height: .7;
        text-shadow: 0 0 2px rgba(255, 255, 255, 0.45);
        animation: span 3s ease-in infinite alternate;
    }
    .main{
        display: flex;
        justify-content: center;
        align-items: flex-start;
      
          
        @media(max-width: 600px){ transform: scale(.65); }
    }
    .letter{
        display: inline-flex;
        height: 1.5vw;
        width: 0.27vw;
        border: 0.235vw solid rgb(255, 255, 255);
        border-radius: 1.4vw;
        box-shadow:
            0 0 0.1vw rgba(255, 255, 255, 0.75),
            inset 0 0 0.1vw rgba(255, 255, 255, 0.45);
    
        animation: letter 3s ease-in-out infinite alternate;
    }
    @keyframes span {
        0%,30%{ margin: 0 15px; }
        70%,100%{ margin: 0 5px; }
    }
    @keyframes letter {
        0%,30%{ width: 27px; }
        70%,100%{ width: 20vw; }
    }
}

        `,
        js: `

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor23__tabs__button--active'));
            button.classList.add('editor23__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor23__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor23__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor23__code-menu--expanded');
            codeInput.classList.remove('editor23__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});