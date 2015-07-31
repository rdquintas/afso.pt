$(document).ready(function() {

    initalizeStuff();

    // Initialize SuperFish menu
    $('nav#desktop-menu').superfish({
        delay: 0,
        speed: 0,
        speedOut: 0,
        cssArrows: false,
        autoArrows: false // disable generation of arr
    });

    // Initialize slick slider for HERO
    $('.module.hero').slick({
        // dots: true,
        infinite: true,
        // speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    // Initialize slick slider for VALORES
    $('.module.valores .frases-container').slick({
        // dots: true,
        infinite: true,
        // speed: 300,
        slidesToShow: 1,
        // adaptiveHeight: true,
        autoplay: false
            // autoplaySpeed: 2000
    });


    // do stuff with window on resize
    $(window).resize(function() {
        initalizeStuff();
    });

    // Initializes the lazy-load library
    echo.init({
        offset: 100,
        throttle: 250,
        unload: false
    });

});



/************************************
 * burger icon click event (mobile only)
 ************************************/
$(".burger-icon").on("click", function(e) {
    e.preventDefault();
    $(".burger-icon i.fa-bars").toggleClass("hidden");
    $(".burger-icon i.fa-times").toggleClass("hidden");
    $("nav#mobile-menu").toggleClass("move");
    $(".main-container").toggleClass("move");
    $(window).scrollTop(0);
});



/************************************
 * Onscroll event to shrink header
 ************************************/
$(window).scroll(function() {
    // if this is not the home-page, or if window > 1000px
    if ($('.header').attr("data-home") === "false" || $(window).width() <= 1000) {
        return;
    }

    if ($(document).scrollTop() > 100) {
        $('.header').addClass('smaller');
    } else {
        $('.header').removeClass('smaller');
    }
});


// Initializes some stuff:
// - hoverdir stuff and
// - adds "smaller" class to the header 
function initalizeStuff() {
    if ($(window).width() <= 1000) {
        $('#da-thumbs > li').hoverdir("destroy");
        $('.header').addClass('smaller');
        $(".module.hero.desktop").addClass("hidden");
        $(".module.hero.mobile").removeClass("hidden");
    } else {
        $('#da-thumbs > li').hoverdir();
        $(".module.hero.desktop").removeClass("hidden");
        $(".module.hero.mobile").addClass("hidden");
        if ($('.header').attr("data-home") === "true") {
            $('.header').removeClass('smaller');
        }
    }
}
