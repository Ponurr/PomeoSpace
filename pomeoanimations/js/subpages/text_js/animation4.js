document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".shaking-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach(char => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
  });

  setInterval(() => {
    document.querySelectorAll(".shaking-text span").forEach(span => {
      let x = (Math.random() - 0.5) * 10;
      let y = (Math.random() - 0.5) * 10;
      span.style.transform = `translate(${x}px, ${y}px)`;
    });
  }, 100);
});
