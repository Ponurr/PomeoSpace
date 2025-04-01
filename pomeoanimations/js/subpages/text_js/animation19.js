const smokeTextObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('smoke-text--visible');
    } else {
      entry.target.classList.remove('smoke-text--visible');
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.smoke-text').forEach(el => {
  el.setAttribute('data-text', el.textContent);
  smokeTextObserver.observe(el);
});
