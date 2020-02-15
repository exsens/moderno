$(function(){
 
    $('.rate-star').rateYo({
        normalFill: '#ffa726',
        starWidth: '12px',
        spacing: '2px',
        readOnly: true,
        rating: 5,
    });

    var mixer = mixitup('.products__inner-box');

    $('.slider-products__items').slick({
        
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
        dotsClass: 'products__slider-dots',
      });
    
});