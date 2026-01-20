let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  const carouselInner = document.querySelector(".carousel-inner");
  carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(direction) {
  showSlide(currentSlide + direction);
}

// Auto-slide every 5 seconds
setInterval(() => {
  moveSlide(1);
}, 5000);

// Initial call to set up
showSlide(currentSlide);
