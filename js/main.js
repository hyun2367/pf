$(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $(".btn_top").fadeIn();
        }else{
            $(".btn_top").fadeOut();
        }
    });
    
    $(".btn_top, .logo").on("click",function(){
        $("html,body").animate({scrollTop:0},600);
    });

    $(window).scroll(function(){
        var height = $(document).scrollTop();
        if(height >= 560 && height <= 1144){
            $(".header_main>ul>li").removeClass("on on2")
            $(".header_main>ul>li:nth-child(1)").addClass("on on2")
        }else  if (height >= 1145 && height <= 5700){
            $(".header_main>ul>li").removeClass("on on2")
            $(".header_main>ul>li:nth-child(2)").addClass("on on2")
        }else if(height >= 5701){
            $(".header_main>ul>li").removeClass("on on2")
            $(".header_main>ul>li:nth-child(3)").addClass("on on2")
        }else {
            $(".header_main>ul>li").addClass("on on2")
        }
    });

    //============ skill ============ 
    $(".header_main>ul>li:nth-child(1)").on("click",function(){
        var about = $("#skill").position(); 
        $("html,body").animate({scrollTop:about.top-80},400)
    });
    //============ portfolio ============ 
    $(".header_main>ul>li:nth-child(2)").on("click",function(){
        var about = $("#portfolio").position(); 
        $("html,body").animate({scrollTop:about.top-70},400)
    });
    //============ etc ============ 
    $(".header_main>ul>li:nth-child(3)").on("click",function(){
        var about = $("#etc").position(); 
        $("html,body").animate({scrollTop:about.top-40},400)
    });


    //=============================================etc1==============================================

    $("#etc>.etc_main>.etc_1").on("click",function(e){
        e.preventDefault();
        $("#popup>.popup_main>.bg").fadeIn();
        $("#popup>.popup_main>#popup1").fadeIn();
        $("#popup>.popup_main>#popup1>button").fadeIn();
    });

    $("#popup>.popup_main>#popup1").mouseenter(function(){
        $("#popup>.popup_main>#popup1>button").stop().fadeIn();
    });

    $("#popup>.popup_main>#popup1").mouseleave(function(){
        $("#popup>.popup_main>#popup1>button").stop().fadeOut();
    });

    $("#popup>.popup_main>.bg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup1").fadeOut();
        $("#popup>.popup_main>#popup1>button").fadeOut();
        history.go(0);
    });

    $("#popup>.popup_main>#popup1>.popList>.popImg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup1").fadeOut();
        $("#popup>.popup_main>#popup1>button").fadeOut();
        history.go(0);
    });

    //=============================================etc_2==============================================

    $("#etc>.etc_main>.etc_2").on("click",function(e){
        e.preventDefault();
        $("#popup>.popup_main>.bg").fadeIn();
        $("#popup>.popup_main>#popup2").fadeIn();
        $("#popup>.popup_main>#popup2>button").fadeIn();
    });

    $("#popup>.popup_main>#popup2").mouseenter(function(){
        $("#popup>.popup_main>#popup2>button").stop().fadeIn();
    });

    $("#popup>.popup_main>#popup2").mouseleave(function(){
        $("#popup>.popup_main>#popup2>button").stop().fadeOut();
    });

    $("#popup>.popup_main>.bg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup2").fadeOut();
        $("#popup>.popup_main>#popup2>button").fadeOut();
        history.go(0);
    });

    $("#popup>.popup_main>#popup2>.popList>.popImg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup2").fadeOut();
        $("#popup>.popup_main>#popup2>button").fadeOut();
        history.go(0);
    });

    //=============================================etc_3==============================================

    $("#etc>.etc_main>.etc_3").on("click",function(e){
        e.preventDefault();
        $("#popup>.popup_main>.bg").fadeIn();
        $("#popup>.popup_main>#popup3").fadeIn();
        $("#popup>.popup_main>#popup3>button").fadeIn();
    });

    $("#popup>.popup_main>#popup3").mouseenter(function(){
        $("#popup>.popup_main>#popup3>button").stop().fadeIn();
    });

    $("#popup>.popup_main>#popup3").mouseleave(function(){
        $("#popup>.popup_main>#popup3>button").stop().fadeOut();
    });

    $("#popup>.popup_main>.bg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup3").fadeOut();
        $("#popup>.popup_main>#popup3>button").fadeOut();
        history.go(0);
    });

    $("#popup>.popup_main>#popup3>.popList>.popImg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup3").fadeOut();
        $("#popup>.popup_main>#popup3>button").fadeOut();
        history.go(0);
    });

    //=============================================etc_4==============================================

    $("#etc>.etc_main>.etc_4").on("click",function(e){
        e.preventDefault();
        $("#popup>.popup_main>.bg").fadeIn();
        $("#popup>.popup_main>#popup4").fadeIn();
        $("#popup>.popup_main>#popup4>button").fadeIn();
    });

    $("#popup>.popup_main>#popup4").mouseenter(function(){
        $("#popup>.popup_main>#popup4>button").stop().fadeIn();
    });

    $("#popup>.popup_main>#popup4").mouseleave(function(){
        $("#popup>.popup_main>#popup4>button").stop().fadeOut();
    });

    $("#popup>.popup_main>.bg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup4").fadeOut();
        $("#popup>.popup_main>#popup4>button").fadeOut();
        history.go(0);
    });

    $("#popup>.popup_main>#popup4>.popList>.popImg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup4").fadeOut();
        $("#popup>.popup_main>#popup4>button").fadeOut();
        history.go(0);
    });

    //=============================================etc_5==============================================

    $("#etc>.etc_main>.etc_5").on("click",function(e){
        e.preventDefault();
        $("#popup>.popup_main>.bg").fadeIn();
        $("#popup>.popup_main>#popup5").fadeIn();
        $("#popup>.popup_main>#popup5>button").fadeIn();
    });

    $("#popup>.popup_main>#popup5").mouseenter(function(){
        $("#popup>.popup_main>#popup5>button").stop().fadeIn();
    });

    $("#popup>.popup_main>#popup5").mouseleave(function(){
        $("#popup>.popup_main>#popup5>button").stop().fadeOut();
    });

    $("#popup>.popup_main>.bg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup5").fadeOut();
        $("#popup>.popup_main>#popup5>button").fadeOut();
        history.go(0);
    });

    $("#popup>.popup_main>#popup5>.popList>.popImg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup5").fadeOut();
        $("#popup>.popup_main>#popup5>button").fadeOut();
        history.go(0);
    });



    var max =0;
    var current =0;
    var container;

    function animate($direction){
        if($direction == "next"){
            $(container.children()[1]).css("margin-left","800px");
            container.append(container.children()[0]);
            TweenMax.to(container.children()[0],0.8,{
                marginLeft:0,
                ease:Expo.easeOut
            });
        }else if($directio == "prev"){
            container.prepend(container.childeren()[max - 1]);
            $(container.children()[0]).css("margin-left","800px")
            TweenMax.to(container.children()[0],0.8,{
                marginLeft:0,
                ease:Expo.easeOut
            });
        }
    }

    //=========================== popup prev + next (이전, 다음 버튼)

    function prev(){
        current--;
        if(current < 0) current = max -1;
        animate("prev");
    }

    function next(){
        current++;
        if(current > max -1 ) current - 0;
        animate("next");
    }


    //prev + next Event
    //prev
    $("#popup>.popup_main>.popup>button.prev").on("click",function(){
        container = $(this).parent(".popup").find(".popList");
        max = container.children().length;
        container.addClass("margin-left","-800px");
        container.prepend(container.children()[max - 1]);
        prev();
    });
  
    //next
    $("#popup>.popup_main>.popup>button.next").on("click",function(){
        container = $(this).parent(".popup").find(".popList");
        max = container.children().length;
        container.addClass("margin-left","-800px");
        container.append(container.children()[max -1]);
        next();
    });



    
});