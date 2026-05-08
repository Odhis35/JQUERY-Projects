$(document).ready(function(){
    $("#hide-it").click(function(){
        $("p").hide();
        $("#lt-learn").hide();
    });
    $("p").click(function(){
        $("p").append("<p class='bev'>, I love Bevvy so much!</p>");
    })

    $("#append-it").dblclick(function(){
        $(".bev").hide();
    })

    $(".it-learn").click(function(){
        $(".it-learn").append("<span id='extra'> today!</span>");
    })

    $(".it-learn").dblclick(function(){
        $(this).find("#extra").remove();
    })
});