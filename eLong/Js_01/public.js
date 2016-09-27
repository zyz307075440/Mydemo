/**
 * Created by mr.z on 2016/5/14.
 */
$(function () {

    //微信客服隐藏的盒子鼠标经过显示隐藏

    $(".custom_wx").mouseenter(function () {
        $(".custom_wx_box").css("display", "block");
    });
    $(".custom_wx").mouseleave(function () {
        $(".custom_wx_box").css("display", "none");
    });

    //选择语言隐藏的盒子鼠标经过显示隐藏

    $(".language").mouseenter(function () {
        $(".language>p").css("display", "block");
        $(".language").addClass("languaget")
    });
    $(".language").mouseleave(function () {
        $(".language>p").css("display", "none");
        $(".language").removeClass("languaget")
    });

    //手机专享5折隐藏的盒子鼠标经过显示隐藏

    $(".one_panic").mouseenter(function () {
        $(".only_pione").css("display", "block");
    });
    $(".one_panic").mouseleave(function () {
        $(".only_pione").css("display", "none");
    });

    //客服电话隐藏的盒子鼠标经过显示隐藏

    $(".custom_call").mouseenter(function () {
        $(".on_phonnum").css("display", "block");
    });
    $(".custom_call").mouseleave(function () {
        $(".on_phonnum").css("display", "none");
    });

    //导航条特效

    //鼠标点击颜色变深开始

    $(".header_nav>.nav_box>.link>li>a").click(function () {
        $(this).css("backgroundColor", "#003679").parent().siblings().children().css("backgroundColor", "");
    });
    //鼠标点击颜色变深结束


    //登陆框显示隐藏开始

    $(".login_register").mouseenter(function () {
        $(".land_box").css("display", "block");
    });
    $(".login_register").mouseleave(function () {
        $(".land_box").css("display", "none");
    });
    //登陆框显示隐藏结束


    //底部定义列表动画开始
    $(".foorer_info a").mouseenter(function () {
        $(this).stop().animate({"paddingLeft":"5px"},100)
    });

    $(".foorer_info a").mouseleave(function () {
        $(this).stop().animate({"paddingLeft":""},100)
    });
    //底部定义列表动画结束


    //底部的4个小图片特效开始
    $(".footer_safe>a").mouseenter(function () {
        $(this).stop().animate({"bottom": "5px"}, 300)
    });
    $(".footer_safe>a").mouseleave(function () {
        $(this).stop().animate({"bottom": "0px"}, 300)
    });
    //底部的4个小图片特效结束


    //尾部导航特效开始
    $(".bottom_nav li").click(function () {
        $(this).addClass("action").siblings().removeClass("action");
        $(this).children('a').css('color', "#333").parent().siblings().children().css("color", "#fff");
    });
    //尾部导航特效结束


    //轮播图特效开始
    var index = 1;
    $(".dots>li").click(function () {
        index = $(this).index();
        silder(this);
    });

    function silder(obj) {
        //console.log($(".show_pic>li"))
        $(obj).addClass("active").siblings().removeClass("active");
        $(".show_pic>li").eq($(obj).index()).animate({"opacity": "1"}, 300).siblings().animate({"opacity": "0"}, 300);
    }

    var item = $(".dots>li");
    setInterval(function () {
        silder(item[index])
        index++
        if(index > item.length - 1) {
            index = 0;
        }
    }, 3000);
    //轮播图特效结束


    //登陆show特效开始

    $(function () {
        $('.no_record').show(400);
    });

    //登陆show特效结束

    //手风琴特效开始

    $("#sm>li").mouseenter(function () {
        $(this).stop(true,false).animate({"width": "398px"}, 200).siblings().stop(true,false).animate({"width": "132px"}, 200);
        $(this).children().children(".mask_b").css("display", "none");
    });
    $("#sm>li").mouseleave(function () {
        $("#sm>li").stop(true,false).animate({"width": "170px"}, 200)
        $(this).children().children(".mask_b").css("display", "block");
    });
    //手风琴特效结束
});




