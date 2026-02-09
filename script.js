let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".dot");
const totalSlides = slides.length;
let slideInterval;

function showSlide(index) {
  // Handle wrapping
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  // Update Carousel Position
  const carouselInner = document.querySelector(".carousel-inner");
  carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update Dots
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });

  // Update Active Class on Slides
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });
}

function moveSlide(direction) {
  showSlide(currentSlide + direction);
  resetTimer();
}

function currentSlideTo(index) {
  showSlide(index);
  resetTimer();
}

function startTimer() {
  slideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
}

function resetTimer() {
  clearInterval(slideInterval);
  startTimer();
}

// Initial setup
showSlide(currentSlide);
startTimer();
