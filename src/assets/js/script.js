$(function() {
    //initialize swiper when document ready
    var mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        loop: true,
        slidesPerView: 3,
        spaceBetween: 3,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    //initialize date picker
    $("#datepicker").datepicker({
        firstDay: 1,
        beforeShowDay: function(date) {
            if (date.getDay() == 4 || date.getDay() == 6) {
                return [true, "highlighted", ""];
            } else {
                return [true, "", ""];
            }
        }
    });

    // smooth scroll
    // https://github.com/cferdinandi/smooth-scroll
    var scroll = new SmoothScroll('a[href*="#"]');
});
