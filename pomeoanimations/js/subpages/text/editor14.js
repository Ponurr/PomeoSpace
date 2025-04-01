document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.editor14__tabs__button');
    const codeMenu = document.getElementById('codeMenu14');
    const codeInput = document.querySelector('.editor14__code-menu__input');

    // Przykładowe kody dla każdej zakładki (puste pola, które możesz wypełnić ręcznie)
    const defaultCodes = {
        html: `
<div class="editor14__animation-area__text">
            <span>POMEO</span>
            <span>POMEO</span>
</div>
        `,
        scss: `
.editor14__animation-area__text {
    font-size: 2rem;
    color: #fff;
    text-align: center;
    justify-content: center;
    display: flex;


    span{
        position: absolute;
        transform: translate(-50%, -50%);
          width: 35vw;
          font-size: 2.8vw;
          font-family: "ponur";
          font-weight: 300;
          letter-spacing: 0.12vw;
          text-transform: uppercase;
         
          left: 24.5vw;
          
          animation: effect 15s linear infinite;
          &:nth-child(1){
            color: transparent;
            -webkit-text-stroke: 0.18vw #ffffff;

          }
          &:nth-child(2){

            color: #ffffff;
            animation: animate 4s ease-in-out infinite;
          }
      }
     

      @keyframes animate {
        0%,
        100% {
          clip-path: polygon(
            0% 45%,
            16% 44%,
            33% 50%,
            54% 60%,
            70% 61%,
            84% 59%,
            100% 52%,
            100% 100%,
            0% 100%
          );
        }
      
        50% {
          clip-path: polygon(
            0% 60%,
            15% 65%,
            34% 66%,
            51% 62%,
            67% 50%,
            84% 45%,
            100% 46%,
            100% 100%,
            0% 100%
          );
        }
      }
    }    
 
        `,
        js: `

        `
    };

    // Przełączanie zakładek i rozszerzanie menu
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('editor14__tabs__button--active'));
            button.classList.add('editor14__tabs__button--active');

            const tab = button.getAttribute('data-tab');
            codeMenu.classList.add('editor14__code-menu--expanded');

            // Wypełnij pole tekstowe odpowiednim przykładowym kodem (możesz go zmienić ręcznie)
            codeInput.value = defaultCodes[tab] || '';
            codeInput.classList.add('editor14__code-menu__input--visible');

            // Ustaw focus na polu tekstowym, aby łatwiej edytować
            codeInput.focus();
        });
    });

    // Kliknięcie poza menu zamyka je (opcjonalne)
    document.addEventListener('click', (e) => {
        if (!codeMenu.contains(e.target) && !Array.from(tabButtons).some(btn => btn.contains(e.target))) {
            codeMenu.classList.remove('editor14__code-menu--expanded');
            codeInput.classList.remove('editor14__code-menu__input--visible');
            codeInput.value = ''; // Wyczyść pole po zamknięciu
        }
    });
});