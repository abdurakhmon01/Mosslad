$(document).ready(function () {
    $('.inner').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 700,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnFocus: true,
    })
    
    $('.header-menu__link').click(function(){
        // e.preventDefault();
        $('.header-menu__link').removeClass('header-menu__link_active');
        $(this).addClass('header-menu__link_active');
    })
    
    $('.header-burger').click(function(){
        if(!$(this).hasClass('show')){
            $('.header').addClass('fixed-top');
            $('.header-menu').css('display', 'flex');
            $(this).addClass('show');
        }
        else{
            $('.header').removeClass('fixed-top');
            $('.header-menu').css('display', 'none');
            $(this).removeClass('show');
        }
    })
    
    // var onOff = true;
    // $(window).scroll(function(){
    //     if ($(this).scrollTop() > $('.header').outerHeight() - $('.header-nav').outerHeight() && onOff == true){
    //         $('.header-nav').addClass('fixed-top').css('opacity', 0).animate({
    //             opacity: 1
    //         }, 800)
    //         onOff = false;
    //     }
    //     else if ($(this).scrollTop() < $('.header').outerHeight() - $('.header-nav').outerHeight() && onOff == false){
    //         $('.header-nav').animate({
    //             opacity: 0
    //         }, 800, function(){
    //             $('.header-nav').removeClass('fixed-top').css('opacity', 1)
    //         })
    //         onOff = true;
    //     }
    // })
});



