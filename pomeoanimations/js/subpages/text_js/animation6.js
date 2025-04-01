document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".looping-text");
  const text = textElement.innerText;
  textElement.innerHTML = "";

  text.split("").forEach((char, index) => {
    let span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);

    setTimeout(() => {
      span.style.transform = "translateX(0)";
      span.style.opacity = "1";
    }, index * 100);
  });

  setInterval(() => {
    document.querySelectorAll(".looping-text span").forEach((span, index) => {
      setTimeout(() => {
        span.style.transform = "translateX(-20px)";
        span.style.opacity = "0";
      }, index * 100);
      setTimeout(() => {
        span.style.transform = "translateX(0)";
        span.style.opacity = "1";
      }, index * 100 + 1000);
    });
  }, 3000);
});
