document.addEventListener("DOMContentLoaded", function () {
    const scrollToTop = document.getElementById("scrollToTop");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollToTop.classList.add("active");
      } else {
        scrollToTop.classList.remove("active");
      }
    });
  
    scrollToTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
  