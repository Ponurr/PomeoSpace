document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".blur-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach(char => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
  });

  setInterval(() => {
    document.querySelectorAll(".blur-text span").forEach(span => {
      span.style.filter = Math.random() > 0.5 ? "blur(3px)" : "blur(0px)";
      span.style.opacity = Math.random() > 0.5 ? "0.5" : "1";
    });
  }, 300);
});
