// Select all gallery images
const images = document.querySelectorAll(".gallery img");

const slideshow = document.getElementById("slideshow");
const slideImage = document.getElementById("slideImage");
const playButton = document.getElementById("playButton");

let currentIndex = 0;
let autoPlay = null;

// Open the slideshow
function openSlide(index) {
    currentIndex = index;
    showSlide();

    slideshow.style.display = "flex";
}

// Display the selected image
function showSlide() {
    slideImage.src = images[currentIndex].src;
    slideImage.alt = images[currentIndex].alt;
}

// Next and Previous buttons
function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showSlide();
}

// Close the slideshow
function closeSlide() {
    slideshow.style.display = "none";
    stopAutoPlay();
}

// Start or stop automatic slideshow
function toggleAutoPlay() {
    if (autoPlay) {
        stopAutoPlay();
    } else {
        autoPlay = setInterval(function () {
            changeSlide(1);
        }, 2000);

        playButton.textContent = "Stop Auto Play";
    }
}

// Stop automatic slideshow
function stopAutoPlay() {
    clearInterval(autoPlay);
    autoPlay = null;
    playButton.textContent = "Start Auto Play";
}

// Close slideshow when clicking the dark background
slideshow.addEventListener("click", function (event) {
    if (event.target === slideshow) {
        closeSlide();
    }
});

// Close slideshow with the Escape key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeSlide();
    }
});