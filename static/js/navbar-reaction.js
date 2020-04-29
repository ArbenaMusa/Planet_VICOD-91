$(document).ready(function () {
    $(window).scroll(function () {
        $('nav').toggleClass('bg-dark', $(this).scrollTop() > 220);
    });
});