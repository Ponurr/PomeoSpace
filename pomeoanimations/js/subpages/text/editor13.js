document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor13__tabs__button');
    const codeMenu = document.getElementById('codeMenu13');
    const codeInput = document.querySelector('.editor13__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<div class="editor13__animation-area__text"><span></span></div>
        `,
        scss: `
.editor13__animation-area__text {

    span{
    font-size: 2rem;
    color: #fff;
    text-align: center;
    animation: effect 2s infinite ease-in-out;
    }
    span:after{
      content: "";
      width: 100%;
      height: 100%;
      line-height: 48px;
      left: 30%;
      top: 50%;
      animation: effect 7.5s linear infinite;
      animation-fill-mode: forwards;
  }
}

@keyframes effect {
      0% {
        content: "PO";
      }
      6% {
        content: "MEO";
      }
      12% {
        content: "SPACE";
      }
      18% {
        content: "POMEOSPACE ";
      }
      24% {
        content: "";
      }
      30% {
        content: "PO";
      }
      36% {
        content: "POM";
      }
      42% {
        content: "POMEO ";
      }
      50% {
        content: "POME ";
      }
      56% {
        content: "POMEO  ";
      }
      63% {
        content: "POMEOS  ";
      }
      71% {
        content: "POMEOSPA ";
      }
      80% {
        content: "POMEOSP";
      }
      88% {
        content: "POMEOSPAC";
      }
      94% {
        content: "POMEOSPA";
      }
      100% {
        content: "POMEOSPACE";
      }
}     
        `,
        js: `

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor13__tabs__button--active'));
            button.classList.add('editor13__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor13__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor13__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor13__code-menu--expanded');
            codeInput.classList.remove('editor13__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});