$(function(){
    // .menu에 마우스를 올리면
    // .menu_over가 보인다.
    $(".menu_wrap").hover(function(){
        // 마우스를 올렸을 때
        $(".menu_open").stop().slideDown();
    }, function(){
        // 마우스가 벗어났을 때
        $(".menu_open").stop().slideUp();
    });

    $('.idx_slider').bxSlider({
        auto: true,
        mode: 'fade',
        });
    });    

    $(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 500) {
                $('.wave.top_button').fadeIn();
            } else {
                $('.wave.top_button').fadeOut();
            }
        });

    $('.wave .top_button ').click(function(){
        $('html,body').animate({
            scrollTop: 0
        },400);    
        return false;
    });
});
