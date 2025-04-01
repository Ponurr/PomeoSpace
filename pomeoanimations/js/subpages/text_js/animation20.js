const flipCardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('flip-card--visible');
    } else {
      entry.target.classList.remove('flip-card--visible');
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.flip-card').forEach(el => {
  flipCardObserver.observe(el);
});
