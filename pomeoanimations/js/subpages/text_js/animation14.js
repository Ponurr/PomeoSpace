document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".vortex-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach((char, index) => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
  });

  function vortexEffect() {
    document.querySelectorAll(".vortex-text span").forEach((span, index) => {
      let angle = index * 15;
      let radius = index * 5;
      let x = Math.cos(angle) * radius;
      let y = Math.sin(angle) * radius;

      setTimeout(() => {
        span.style.transition = "transform 1.5s ease-in-out, opacity 1.5s ease-in-out";
        span.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
        span.style.opacity = "0";
      }, index * 100);
    });

    setTimeout(() => {
      document.querySelectorAll(".vortex-text span").forEach((span, index) => {
        setTimeout(() => {
          span.style.transition = "transform 1.5s ease-in-out, opacity 1.5s ease-in-out";
          span.style.transform = "translate(0, 0) rotate(0deg)";
          span.style.opacity = "1";
        }, index * 80);
      });
    }, 4000);
  }

  setInterval(vortexEffect, 8000);
  vortexEffect();
});
