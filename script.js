$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('bg-colored');
    } else {
        $('.navbar').removeClass('bg-colored');
    }
});
