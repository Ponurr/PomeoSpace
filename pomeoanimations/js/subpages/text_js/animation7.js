document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".magnetic-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach(char => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
  });

  document.addEventListener("mousemove", (event) => {
    document.querySelectorAll(".magnetic-text span").forEach(span => {
      let rect = span.getBoundingClientRect();
      let dx = event.clientX - (rect.left + rect.width / 2);
      let dy = event.clientY - (rect.top + rect.height / 2);
      let distance = Math.sqrt(dx * dx + dy * dy);

      let force = Math.min(100 / distance, 3);
      span.style.transform = `translate(${dx * force * 0.1}px, ${dy * force * 0.1}px)`;
    });
  });

  document.addEventListener("mouseleave", () => {
    document.querySelectorAll(".magnetic-text span").forEach(span => {
      span.style.transform = "translate(0, 0)";
    });
  });
});
