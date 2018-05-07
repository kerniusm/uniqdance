$(function() {

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
