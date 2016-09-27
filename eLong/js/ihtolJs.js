//旅游目的地

$(function () {
    //热门旅游目的地
    $(".n_conBoxTC>ul>li").mouseenter(function () {
        $(this).find(".n_mask").stop().animate({
            "bottom": "0px"
        }, 200)
    });
    $(".n_conBoxTC>ul>li").mouseleave(function () {
        $(this).find(".n_mask").stop().animate({
            "bottom": "-55px"
        }, 200)
    });
    //探索酒店
    $(".n_conBoxTC_2").mouseenter(function () {
        $(this).find("i").show();
        $(this).find(".searchHotelBoxOneT").css("opacity", 0.8);
        $(this).stop().animate({"margin-top":"-10px"})
    });
    $(".n_conBoxTC_2").mouseleave(function () {
        $(".twig").hide();
        $(this).find(".searchHotelBoxOneT").css("opacity", 0.6);
        $(this).stop().animate({"margin-top":"0"})
    });

});


//度假主题点击按钮
$(function () {
    $(".check>li").click(function () {
        $(this).children().children("i").animate({"height": "61px"}, 400).parent().parent().siblings().find("i").animate({"height": "0"}, 400);

        //$(".n_conBox2TC ul li").eq($(this).index()).fadeIn().siblings().fadeOut()
        //.animate({"left":"-1185"})
        $(".n_conBox2TC ul li").eq($(this).index()).fadeIn().siblings().fadeOut()

    });


    //鼠标经过图片
    $(".n_conBox2TC ul li img").mouseenter(function () {

        $(this).stop().animate({"opacity": 0.7},200);
    });

    $(".n_conBox2TC ul li img").mouseleave(function () {

        $(this).stop().animate({"opacity": 1},200);
    });

});

//机票
$(function () {
    $(".start_jp>li").click(function () {
        $(this).addClass("cl").siblings().removeClass("cl");
        $(".products_0>div").eq($(this).index()).addClass("selected").siblings().removeClass("selected");

    });
    $(".start_jp1>li").click(function () {
        $(this).addClass("cl").siblings().removeClass("cl");
        $(".products_1>div").eq($(this).index()).addClass("selected").siblings().removeClass("selected");

    });
});


//