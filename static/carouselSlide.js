var slideAmount = 0;
var wWidth = $(window).width();
if(wWidth > 568){
    var itemWidth = $(".bionluk .testimonials").width() / 2 ;
}
else{
    var itemWidth = $(".bionluk .testimonials").width() ;
}

$(window).resize(function(){
    var wWidth = $(window).width();
    if(wWidth > 568){
    var itemWidth = $(".bionluk .testimonials").width() / 2 ;
    $(".bionluk .owl-item").css("width",itemWidth+"px");
    var calculatedWidth = limit*itemWidth;
    $(".bionluk .owl-stage-outer").css("width",calculatedWidth+"px");
    }
    else{
    var itemWidth = $(".bionluk .testimonials").width() ;
    $(".bionluk .owl-item").css("width",itemWidth+"px");
    var calculatedWidth = limit*itemWidth;
    $(".bionluk .owl-stage-outer").css("width",calculatedWidth+"px");
    }

});


$(".bionluk .owl-item").css("width",itemWidth+"px");
var limit = $(".bionluk .owl-item").length;
if(limit == 1 || limit == 0){
    limit = 2;
}
var calculatedWidth = limit*itemWidth;
$(".bionluk .owl-stage-outer").css("width",calculatedWidth+"px");
/*var rightLimit = Math.ceil(calculatedWidth / (itemWidth*2));
var leftLimit = 0; */
var slideCounter = Math.ceil(calculatedWidth / (itemWidth*2));
var upLimit = slideCounter;
$(".bionluk .owl-next").click(function(){
    if(slideCounter>0){
        slideCounter -= 1;
        slideAmount += ($(".bionluk .owl-item:nth-child(1)").width()) * -1;
        $(".bionluk .owl-stage").css("transform","translate3d("+slideAmount+"px,0px,0px)"); 
    }
    
});
$(".bionluk .owl-prev").click(function(){
    if(slideCounter < upLimit ){
        slideCounter += 1 ;
        slideAmount += $(".bionluk .owl-item:nth-child(1)").width();
        $(".bionluk .owl-stage").css("transform","translate3d("+slideAmount+"px,0px,0px)"); 
    }
    
});