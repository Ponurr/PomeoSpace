const explodeTextObserver2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const chars = entry.target.querySelectorAll('.text-anim-explode2__char');
  
      if (entry.isIntersecting) {
        chars.forEach((char, index) => {
          char.style.transitionDelay = `${index * 30}ms`; // opcjonalny efekt falowania
          char.classList.add('text-anim-explode2__char--visible');
        });
      } else {
        chars.forEach(char => {
          char.classList.remove('text-anim-explode2__char--visible');
          char.style.transitionDelay = '';
        });
      }
    });
  }, { threshold: 0.3 });
  
  document.querySelectorAll('[data-text-anim-explode2]').forEach(el => {
    const originalText = el.textContent.trim();
    el.innerHTML = '';
  
    // dzielenie na słowa
    originalText.split(' ').forEach((word, wordIndex) => {
      const wordSpan = document.createElement('span');
      wordSpan.classList.add('text-anim-explode2__word');
  
      word.split('').forEach(char => {
        const charSpan = document.createElement('span');
        charSpan.classList.add('text-anim-explode2__char');
        charSpan.textContent = char;
        wordSpan.appendChild(charSpan);
      });
  
      el.appendChild(wordSpan);
  
      // dodanie spacji po słowie (nie przed, żeby nie rozjechać stylu)
      if (wordIndex < originalText.split(' ').length - 1) {
        el.appendChild(document.createTextNode('\u00A0')); // niełamliwa spacja
      }
    });
  
    explodeTextObserver2.observe(el);
  });
  