document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor15__tabs__button');
    const codeMenu = document.getElementById('codeMenu15');
    const codeInput = document.querySelector('.editor15__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<div class="editor15__animation-area">
          <div class="editor15__animation-area__text">
            <span style="--i:1"> P</span>
            <span style="--i:2"> O</span>
            <span style="--i:4"> M</span>
            <span style="--i:4"> E</span>
            <span style="--i:5"> O</span>
          </div>
        `,
        scss: `
.editor15__animation-area__text {
    overflow: hidden;
    width: 15vw;
    height: 30vw;
    align-items: center;
    display: flex;
    margin-left: -14vw;
    justify-content: center;
    position: relative;
    color: #fff;

    span{
      display: inline-block;
      width: 35vw;
      font-size: 2vw;
      font-family: "ponur";
      font-weight: 300;
      position: relative;
      text-transform: uppercase;
      animation: animate1 2s infinite;
      animation-delay: calc(.2s * var(--i));
    }

      &:nth-child(1) {
        left: 8vw;
      }
      &:nth-child(2) {
        left: 5.2vw;
      }
      &:nth-child(3) {
        left: 3vw;
      }
      &:nth-child(4) {
        left: 0.7vw;
      }
      &:nth-child(5){
        left: -1.65vw;
      }
    }

    @keyframes animate1 {
      0%,
      80% {
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
            tabButtons.forEach(btn => btn.classList.remove('editor15__tabs__button--active'));
            button.classList.add('editor15__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor15__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor15__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor15__code-menu--expanded');
            codeInput.classList.remove('editor15__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});