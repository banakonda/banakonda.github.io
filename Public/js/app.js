$("#sc-exp").click(function() {
    $('html, body').animate({
        scrollTop: $("#experience").offset().top
    }, 750);
    return false;
});

$("#sc-skills").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 750);
    return false;
});


$("#sc-about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 750);
    return false;
});

var $i = 0;
$('#log-in').click(function(){
    if(!$i){
        $('#login').css("display", "flex").hide().fadeIn();
        $('html, body').animate({
            scrollTop: $("header").offset().top,
        }, 0);
        $('#login, #login > form').animate({
            height: '10em'
        }, 600);
        $('#login > form').css("display", "flex").hide().fadeIn();
        
        $i = 1;
    } else {
        $('#login, #login > form').animate({
            height: 0
        }, 600, function(){
            $('#login').css("display", "none").hide().fadeOut();
            $('#login > form').css("display", "none").hide().fadeOut();
        });
        $('html, body').animate({
            scrollTop: $("header").offset().top,
        }, 0);
        
        $i = 0;
    }
});