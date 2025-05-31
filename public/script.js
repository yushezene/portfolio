

    // Confetti + alert for  button
    function triggerLove() {
      alert("💖 Zene appreciates you visiting her website!");
      fetch('/api/visitor', { method: 'POST' });
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }

  document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("active");
          observer.unobserve(entry.target);  
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
  });

  const text = "Hey, I'm Zene Ansari";
  const heading = document.getElementById('typed-heading');
  let index = 0;

  function type() {
    if (index < text.length) {
      heading.textContent += text.charAt(index);
      index++;
      setTimeout(type, 130); 
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    type();
  });
