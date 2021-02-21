/*Evento del botón subir*/
$(document).ready(function () {

    $('.subir').click(function () {
        $('body, html').animate({
            scrollTop: '0px'
        }, 3500);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.subir').slideDown(500);

        } else {
            $('.subir').slideUp(500);
        }
    });

});

/*Fin evento del botón subir*/

/*Evento del menú de navegación*/
function scrollNav() {
    $('.evnav').click(function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 80
        }, 2500);
        return false;
    });
    $('.scrollTop a').scrollTop();
}
scrollNav();

/*Fin evento del menú de navegación*/

new WOW().init();