/**
 * Created by Thinkpad on 2016/5/15.
 */

    $(window).load(function(){
        $(".serviceeml").mouseenter(function(){
            $(".serviceleft").stop().animate({"left":"0"})
        })
        $(".serviceeml").mouseleave(function(){
            $(".serviceleft").stop().animate({"left":"-46px"})
        })
        $("#serviceu li").mouseenter(function(){
             $(this).children("i").css({ "WebkitTransform":"rotate(30deg)"});
                $(this).css("opacity", 1).siblings("li").css("opacity", 0.4);


        })
        $("#serviceu li").mouseleave(function(){
            $(this).children("i").css({ "WebkitTransform":"rotate(0)"});
            $(this).siblings("li").css("opacity", 1);


        })
    })