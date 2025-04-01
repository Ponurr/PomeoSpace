const slideInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in--visible');
    } else {
      entry.target.classList.remove('slide-in--visible');
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.slide-in').forEach(el => {
  slideInObserver.observe(el);
});
