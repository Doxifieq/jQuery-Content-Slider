$(function() {
    const images = $(".content-slider-item")

    let currentImage = images[0];
    let currentIndex = 0;

    $(".content-slider-swipe.prev").click(function() {
        if (currentIndex > 0) {
            currentIndex--;
        }

        $(currentImage).css("transform", "translateX(100%)");

        currentImage = images[currentIndex];

        $(currentImage).css("transform", "translateX(0)");
    });

    $(".content-slider-swipe.next").click(function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
        }

        $(currentImage).css("transform", "translateX(-100%)");

        currentImage = images[currentIndex];

        $(currentImage).css("transform", "translateX(0)");
    });
})