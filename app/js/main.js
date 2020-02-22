$(function(){
    $('.rate-star').rateYo({
        normalFill: '#ffa726',
        starWidth: '12px',
        spacing: '2px',
        readOnly: true,
        rating: 5,
    });

    

    $('.slider-products__items').slick({
        
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true,
        dotsClass: 'products__slider-dots',
      });
      
      $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    $('.icon-th-list').on('click', function(){
        $('.products__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active');

    });
    $('.icon-th-large').on('click',function(){
        $('.products__item').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active');

    });


    var mixer = mixitup('.products__inner-box');
    
});