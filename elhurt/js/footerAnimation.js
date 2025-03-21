document.querySelectorAll('.footer-section--list li').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
  });