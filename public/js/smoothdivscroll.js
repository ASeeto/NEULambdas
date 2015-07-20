$(document).ready(function () {
    $("div#carousel-top").smoothDivScroll({
        mousewheelScrolling: "allDirections",
        manualContinuousScrolling: true,
        autoScrollingMode: "onStart",
        autoScrollingDirection: "endlessLoopRight"
    });
    $("div#carousel-btm").smoothDivScroll({
        mousewheelScrolling: "allDirections",
        manualContinuousScrolling: true,
        autoScrollingMode: "onStart",
        autoScrollingDirection: "endlessLoopLeft"
    });

    $("div#carousel-top").bind("mouseover", function(){
        $("div#carousel-top").smoothDivScroll("stopAutoScrolling");
    });

    $("div#carousel-top").bind("mouseout", function(){
        $("div#carousel-top").smoothDivScroll("startAutoScrolling");
    });

    $("div#carousel-btm").bind("mouseover", function(){
        $("div#carousel-btm").smoothDivScroll("stopAutoScrolling");
    });

    $("div#carousel-btm").bind("mouseout", function(){
        $("div#carousel-btm").smoothDivScroll("startAutoScrolling");
    });
});