let currentIndex = 0;
const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-img');
const totalImages = images.length;

function showSlide(index) {
  const offset = -index * 210; // 200px + 10px margin
  track.style.transform = `translateX(${offset}px)`;
}

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalImages;
  showSlide(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showSlide(currentIndex);
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalImages;
  showSlide(currentIndex);
}, 3000);
