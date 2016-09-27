/**
 * Created by mr.z on 2016/5/15.
 */
$(function () {
    //国内板块
    //h3标签内的特效
    //鼠标经过span时的样式
    $(".internal span").mouseenter(function () {


        if ($(this).hasClass("internal_on")) {
            //alert("aaa")

            return;
        }
        $(this).addClass("internal_h3_gl");
    });

    $(".internal span").mouseleave(function () {
        $(this).removeClass("internal_h3_gl");
    });

    //鼠标点击span事件

    $(".internal span").click(function () {
        var index = $(this).index() - 1;
        $(this).addClass("internal_on").siblings().removeClass("internal_on")

        $(".internal .pic_tab").eq(index).show().siblings().hide()
    });


    //海外板块
    //h3标签内的特效
    //鼠标经过span时的样式
    $(".international span").mouseenter(function () {


        if ($(this).hasClass("internal_on")) {
            //alert("aaa")
            //$(this).css("color", "white");
            return;
        }
        $(this).addClass("internal_h3_gl");
    });

    $(".international span").mouseleave(function () {
        $(this).removeClass("internal_h3_gl");
    });

    //鼠标点击span事件

    $(".international span").click(function () {
        var index = $(this).index() - 1;
        $(this).addClass("internal_on").siblings().removeClass("internal_on")

        $(".international .pic_tab").eq(index).show().siblings().hide()
    });


    //图片部分特效
    $(".pic_tab li").mouseenter(function () {
        $(this).find(".pic_add").children().stop().animate({"top": "-10px"}, 200);
        $(this).find(".scale_tour").css("borderBottom", "3px solid #f55");

    });

    $(".pic_tab li").mouseleave(function () {
        $(this).find(".pic_add").children().stop().animate({"top": "0"}, 200);
        $(this).find(".scale_tour").css("borderBottom", "1px solid #ccc");

    });


    //超值特价票


    $(".start_jp>li").click(function () {
        console.log("aaa")
        $(this).addClass("cl").siblings().removeClass("cl");
        $(".products_0>div").eq($(this).index()).addClass("selected").siblings().removeClass("selected");

    });
    $(".start_jp1>li").click(function () {
        $(this).addClass("cl").siblings().removeClass("cl");
        $(".products_1>div").eq($(this).index()).addClass("selected").siblings().removeClass("selected");

    });
    //超值特价票


    //旅游指南部分

    $(window).load(function () {
        $(".bCleft>ul>li").mouseenter(function () {
            var index = $(this).index();
            console.log(index);
            $(this).addClass("bCleft_on").siblings("li").removeClass("bCleft_on");
            $(this).children("span").css({"display": "block"}).parent().siblings("li").children("span").css({"display": "none"});
            $(".bCleft>ol>li").eq(index).show().siblings().hide();
        });
    });


});