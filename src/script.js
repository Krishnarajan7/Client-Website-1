document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slide-track");
  const slides = Array.from(slider.children);
  const slideWidth = slides[0].offsetWidth;
  const cloneSlides = slides
    .slice(0, slides.length / 2)
    .map((slide) => slide.cloneNode(true));

  cloneSlides.forEach((clone) => slider.appendChild(clone));

  let currentIndex = 0;
  let interval;

  function startSlider() {
    interval = setInterval(() => {
      moveToNextSlide();
    }, 2000);
  }

  function stopSlider() {
    clearInterval(interval);
  }

  function moveToNextSlide() {
    currentIndex++;
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

    if (currentIndex === slides.length) {
      setTimeout(() => {
        slider.style.transition = "none";
        currentIndex = 0;
        slider.style.transform = `translateX(0)`;
      }, 500);
    }
  }

  function moveToPrevSlide() {
    if (currentIndex === 0) {
      slider.style.transition = "none";
      currentIndex = slides.length;
      slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
    setTimeout(() => {
      slider.style.transition = "transform 0.5s ease";
      currentIndex--;
      slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }, 0);
  }

  document.querySelector(".next").addEventListener("click", () => {
    stopSlider();
    moveToNextSlide();
    startSlider();
  });

  document.querySelector(".prev").addEventListener("click", () => {
    stopSlider();
    moveToPrevSlide();
    startSlider();
  });

  slider.addEventListener("transitionend", () => {
    if (currentIndex >= slides.length) {
      slider.style.transition = "none";
      currentIndex = 0;
      slider.style.transform = `translateX(0)`;
    }
  });

  startSlider();
});

//ewfw
