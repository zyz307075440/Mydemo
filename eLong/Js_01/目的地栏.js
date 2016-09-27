/**
 * Created by Thinkpad on 2016/5/15.
 */

$(window).load(function(){
    $(".huadong li").mouseenter(function(){
        $(this).find("span").stop().slideDown(400);


    });
    $(".huadong li").mouseleave(function(){
        $(this).find("span").stop().slideUp(400);
    })
})