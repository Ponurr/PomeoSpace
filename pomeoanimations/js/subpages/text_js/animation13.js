document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".wavee-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach((char, index) => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
  });

  function waveExplode() {
    document.querySelectorAll(".wavee-text span").forEach((span, index) => {
      let x = Math.sin(index) * 50;
      let y = Math.cos(index) * 50;
      let rotation = Math.random() * 40 - 20;

      setTimeout(() => {
        span.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
        span.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
        span.style.opacity = "0";
      }, index * 80);
    });

    setTimeout(() => {
      document.querySelectorAll(".wavee-text span").forEach((span, index) => {
        setTimeout(() => {
          span.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
          span.style.transform = "translate(0, 0) rotate(0deg)";
          span.style.opacity = "1";
        }, (text.length - index) * 80);
      });
    }, 4000);
  }

  setInterval(waveExplode, 8000);
  waveExplode();
});
