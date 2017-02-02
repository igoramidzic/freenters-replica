$(document).ready(function(){
    // Change navbar on scroll

    // Variable stores the height of the Promo-section
    var promoSectionHeight = $('.promo-section').height();

    $(window).scroll(function(){
        if ($(window).scrollTop() > promoSectionHeight - 100){
            $('.navbar').css('background-color','#545454');
        }
        if ($(window).scrollTop() < promoSectionHeight - 50){
            $('.navbar').css('background-color','transparent');
        }
    });
});
