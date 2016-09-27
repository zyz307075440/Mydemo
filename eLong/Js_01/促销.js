/**
 * Created by Thinkpad on 2016/5/15.
 */
$(window).load(function(){
    $(".tab_theme>li").stop().mouseenter(function(){
        $(this).css({"borderBottom":"1px solid brown"});
        $(this).find("img").stop().animate({
            "top":"-10px"
        },150)
    });
    $(".tab_theme>li").mouseleave(function(){
        $(this).css({"borderBottom":"1px solid white"});
        $(this).find("img").stop().animate({
            "top":"0px"
        },150)
    });
})