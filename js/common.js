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
    

    /*소개 왼쪽 버튼 */
    $('.intro_btn .left_btn').on('click',function(){
        $('#intro_list > ul').prepend($('#intro_list>ul>li:last'))
                             .css({marginLeft:"-384px"})
                             .animate({marginLeft:"+"+"384px"},600);
    });

    $('.intro_btn .right_btn').on('click',function(){
        $('#intro_list > ul').animate({marginLeft:"-"+"384px"},600,function(){        
        $('#intro_list > ul').css({marginLeft:"0"})
                             .append($('#intro_list>ul>li:first'))
        });
    });

    setInterval(function(){$('.intro_btn .right_btn').click()},3000);
    //커뮤니티 자동 슬라이드

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
