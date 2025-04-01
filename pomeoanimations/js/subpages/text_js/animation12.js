document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".ash-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach((char, index) => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
  });

  function burnAndRebuild() {
    document.querySelectorAll(".ash-text span").forEach((span, index) => {
      let y = Math.random() * 100 + 50; // Opadanie w dół
      let rotation = Math.random() * 60 - 30;
      let delay = index * 50; // Stopniowe spalanie liter

      setTimeout(() => {
        span.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-out";
        span.style.transform = `translateY(${y}px) rotate(${rotation}deg)`;
        span.style.opacity = "0";
      }, delay);
    });

    setTimeout(() => {
      document.querySelectorAll(".ash-text span").forEach((span, index) => {
        setTimeout(() => {
          span.style.transition = "transform 2s ease-in, opacity 2s ease-in";
          span.style.transform = "translateY(0) rotate(0deg)";
          span.style.opacity = "1";
        }, index * 80);
      });
    }, 4000);
  }

  setInterval(burnAndRebuild, 8000);
  burnAndRebuild();
});
