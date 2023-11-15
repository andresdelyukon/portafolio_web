document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".carousel-container");
    const slides = document.querySelectorAll(".carousel-slide");

    let index = 0;

    function updateCarousel() {
        const offset = -index * 100 + "%";
        container.style.transform = "translateX(" + offset + ")";
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        updateCarousel();
    }

    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos

});