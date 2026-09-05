document.addEventListener("DOMContentLoaded", function () {
// 1. Khai báo các phần tử Menu Mobile
const menuToggle = document.getElementById("menuToggle");
const menuClose = document.getElementById("menuClose");
const navOverlay = document.getElementById("navOverlay");
const overlayLinks = document.querySelectorAll(".overlay-link");

// Mở Menu Overlay
if (menuToggle && navOverlay) {
  menuToggle.addEventListener("click", () => {
    navOverlay.classList.add("active");
  });
}

// Đóng Menu Overlay khi bấm nút X
if (menuClose && navOverlay) {
  menuClose.addEventListener("click", () => {
    navOverlay.classList.remove("active");
  });
}

// Tự động đóng Menu khi chọn mục
overlayLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navOverlay) navOverlay.classList.remove("active");
  });
});

// 2. Nút Back To Top
const backToTopBtn = document.getElementById("backToTop");
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// 3. Hiệu ứng Scroll Reveal (Hiện mượt các phần tử)
const observerOptions = {
  threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

const elements = document.querySelectorAll(".work-item, .profile-card");
elements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});
});