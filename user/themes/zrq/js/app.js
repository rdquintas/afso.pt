/************************************
 * Superfish navigation menu
 ************************************/
$(document).ready(function() {
    // var example = $('nav#original-menu').superfish({
    //     delay: 0,
    //     speed: 0,
    //     speedOut: 0,
    //     // cssArrows: false,
    //     autoArrows: false // disable generation of arr
    // });

});



/************************************
 * burger icon click event (mobile only)
 ************************************/
$(".burger-icon").on("click", function(e) {
    e.preventDefault();
    $("nav#mobile-menu").toggleClass("move");
    $(".container").toggleClass("move");
    $(window).scrollTop(0);
});
