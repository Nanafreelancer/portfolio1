document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, observerOptions);

  const elements = document.querySelectorAll(".work-item, .section-heading, .hero-card");
  elements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });
});