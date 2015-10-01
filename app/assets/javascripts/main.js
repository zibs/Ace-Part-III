$(document).ready(function() {
	$(".poetry-wrappers").last().addClass("closing-couplet");
	$(".poetry-wrappers").last().prev().addClass("closing-couplet");
    $(".fade-out").fadeOut(5000);
});
// RANDOM COLORS EACH GET REQUEST
$(document).ready(function() {
    // SET CIRCLE COLOR
    var colors = ["#00DDFF", "#00FF65", "#EEFF00", "#FF0086", "#FF0045"]
    random_color = colors[(Math.floor(Math.random() * 5))]
    document.getElementsByTagName("circle")[0].setAttribute("stroke", random_color);
    // SET HOVER BORDER
    $(".possible").hover(function() {
        $(this).css({ "border": "3px solid " + random_color });
   });
 // }, function(){$(this).css({"border":"initial"}) 
});


// THE CIRCLE EMBLEM ON FRONTPAGE
$(document).ready(function() {
    $("#periphery").click(function() {
        $(".possible").fadeToggle(500).css({"display":"inline-block", "border":"initial"});
        $(".poems").fadeOut(500);
        $(".essaytries").fadeOut(500);
    });
});

// POETRYS
$(document).ready(function() {
 $(".poetries").click(function() {
    $(".poetries").css({ "border": "3px solid " + random_color });
    $(".poems").fadeToggle(500);
    });
});
$(document).ready(function() {
 $(".poems a").hover(function() {
    $(this).css({ "border-bottom": "2px solid " + random_color });
    }, function(){$(this).css({"border":"initial"}) 
    });
});



// ESSAYS
$(document).ready(function() {
 $(".essays").click(function() {
    $(".assays").css({ "border": "3px solid " + random_color });
    $(".essaytries").fadeToggle(500);
    });
});
// ABOUT PAGE
$(document).ready(function() {
 $(".about").click(function() {
    $(".aboot").css({ "border": "3px solid " + random_color });
    $(".abbot").fadeToggle(500);
    });
});
// DISPLAY ABOUT POETRY PER POEM PAGE
$(document).ready(function() {
    $("#periphery").hover(function() {
        $(".close-the-poetic-loop").stop(true, true).fadeIn("slow");
    });
});