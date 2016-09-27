/**
 * Created by Thinkpad on 2016/5/16.
 */
$(window).load(function () {

    $(".mt22 a").mouseenter(function () {
        $(this).children("i").stop().animate({
            "top": "-10px"
        }, 150)
    });

    $(".mt22 a").mouseleave(function () {
        $(this).children("i").stop().animate({
            "top": "0px"
        }, 150)
    });

    $(".recom_brand_list").mouseenter(function () {
        var a = parseInt($(".recom_brand_list").css("left"));
        if (a < 0) {
            $(".recom_brand_prev").show();
        }
        if (a > -750) {
            $(".recom_brand_next").show();
        }
    })
    $(".bigbox").mouseleave(function () {
        $(".recom_brand_prev").hide();
        $(".recom_brand_next").hide();
    })
    $(".recom_brand_prev").click(function () {
        var a = $(".recom_brand_list").css("left");
        b = parseInt(a) + 150;
        if(b <=0){
            $(".recom_brand_list").animate({"left": "" + b + "px"}, 150,function(){
                var a = parseInt($(".recom_brand_list").css("left"));
                if (a < 0) {
                    $(".recom_brand_prev").show();
                }else{
                    $(".recom_brand_prev").hide();

                }
                if (a > -750) {
                    $(".recom_brand_next").show();
                }else{
                    $(".recom_brand_next").hide();
                }
            });
        }
    })
    $(".recom_brand_next").click(function () {
        var a = $(".recom_brand_list").css("left");
        b = parseInt(a) - 150;
        if(b >=-750){
            $(".recom_brand_list").animate({"left": "" + b + "px"}, 150,function(){
                var a = parseInt($(".recom_brand_list").css("left"));
                if (a < 0) {
                    $(".recom_brand_prev").show();
                }else{
                    $(".recom_brand_prev").hide();

                }
                if (a > -750) {
                    $(".recom_brand_next").show();
                }else{
                    $(".recom_brand_next").hide();
                }
            });
        }

    })
})