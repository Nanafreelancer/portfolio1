// Đợi cho toàn bộ giao diện HTML tải xong
document.addEventListener('DOMContentLoaded', () => {

  // 1. Xử lý bật/tắt Hamburger Menu trên Mobile
  const menuBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.header-container');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      // Bật/tắt class 'active' để hiển thị menu
      navMenu.classList.toggle('active');
    });
  }

  // 2. Xử lý cuộn trang mượt mà (Smooth Scroll) khi nhấp vào các liên kết Menu
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = targetId === '#' ? document.body : document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }

      navMenu?.classList.remove('active');
    });
  });

});