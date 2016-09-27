/**
 * Created by mr.z on 2016/5/15.
 */
$(function () {
    //国内板块
    //h3标签内的特效
    //鼠标经过span时的样式
    $(".internal_h3 span").mouseenter(function () {
        $(this).css("border", "1px solid #f55");
        $(this).css("padding", "0 9px");
        $(this).css("color", "#f55");
    });

    $(".internal_h3 span").mouseleave(function () {
        $(this).css("border", "1px 10px");
        $(this).css("border", "");
        $(this).css("color", "#555");
    });

    //图片部分特效
    $(".internal_tab>li").mouseenter(function () {
        $(this).find(".pic_add").children().stop().animate({"top": "-10px"},200);
        $(this).find(".scale_tour").css("borderBottom", "3px solid #f55");

    });

    $(".internal_tab>li").mouseleave(function () {
        $(this).find(".pic_add").children().stop().animate({"top": "0"},200);
        $(this).find(".scale_tour").css("borderBottom", "1px solid #ccc");

    });

});