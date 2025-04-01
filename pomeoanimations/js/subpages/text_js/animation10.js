document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".fire-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach((char, index) => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
  });

  function explodeAndReset() {
    document.querySelectorAll(".fire-text span").forEach((span, index) => {
      let x = (Math.random() - 0.5) * 50; // Mniejszy rozrzut
      let y = (Math.random() - 0.5) * 80;
      let rotation = Math.random() * 40 - 20;

      setTimeout(() => {
        span.style.transition = "transform 1s ease-out, opacity 1s ease-out";
        span.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
        span.style.opacity = "0";
      }, index * 100); // Opóźnienie dla płynności
    });

    setTimeout(() => {
      document.querySelectorAll(".fire-text span").forEach((span, index) => {
        setTimeout(() => {
          span.style.transition = "transform 1s ease-in, opacity 1s ease-in";
          span.style.transform = "translate(0, 0) rotate(0deg)";
          span.style.opacity = "1";
        }, index * 50);
      });
    }, 4000); // Powrót po 4 sekundach
  }

  setInterval(explodeAndReset, 8000); // Efekt powtarza się co 8 sekund
  explodeAndReset(); 
});
