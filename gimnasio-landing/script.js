// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
menuToggle?.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
});

// Simple testimonials carousel
const slides = Array.from(document.querySelectorAll('.carousel .slide'));
let current = 0;
const show = idx => {
  slides.forEach((s,i)=> s.classList.toggle('active', i===idx));
};
show(current);
document.getElementById('prev')?.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  show(current);
});
document.getElementById('next')?.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  show(current);
});

// Optional: auto-rotate
setInterval(()=>{
  current = (current + 1) % slides.length;
  show(current);
}, 5000);