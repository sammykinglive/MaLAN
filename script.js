// JavaScript code for the text slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.style.opacity = 1;
    } else {
      slide.style.opacity = 0;
    }
  });
}

function nextSlide() {
  slides[currentSlide].style.opacity = 0; // Fade out the current slide
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  setTimeout(showSlide, 1500); // Delay showing the next slide to allow fade-out transition
}

showSlide(); // Show the initial slide
setInterval(nextSlide, 5000); // Change slide every 5 seconds (adjust as desired)




// code for cta button color effect

const ctaButton = document.getElementById('cta-button');

// Animate the background color using GSAP
gsap.to(ctaButton, {
  backgroundColor: "#ffffff", // Final background color
  duration: 3, // Animation duration (in seconds)
  repeat: -1, // Repeat indefinitely
  yoyo: true, // Reverse the animation back and forth
});




// animate on scroll

AOS.init({
  duration: 1500, // Animation duration (in milliseconds)
  once: true, // Animation will trigger only once
});



