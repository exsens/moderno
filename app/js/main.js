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

    // $('.brg-menu').click(function(event){
    //     $('.brg-menu').toggleClass('active')
    //     $('.nav-menu__list').toggleClass('active')
    // });
    $('.brg-menu').on('click', function(){
        $('.nav-menu__list').addClass('active');
        $('.brg-menu--close').addClass('active');
        $('.header__box').removeClass('active');
        $('.header_logo').removeClass('hidden');

    });
    $('.brg-menu--close').on('click',function(){
        $('.nav-menu__list').removeClass('active');
    });

    $('.header__btn-menu').click(function(event){
        $('.header__btn-menu').toggleClass('active');
        $('.header__box').toggleClass('active');
        $('.header_logo').toggleClass('hidden');
        $('.nav-menu__list').removeClass('active');
        $('.brg-menu').toggleClass('hidden');
       
    });
    $('.product-one__tabs .tab, settings__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.product-one__tabs, settings__tabs').find('.tab-item').removeClass('active-tab flex').hide();
            $('.product-one__tabs .tabs, settings__tabs .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab flex').fadeIn();
            return false;
        });

        $('input[type="file"], select').styler();

    var mixer = mixitup('.products__inner-box');
    
});