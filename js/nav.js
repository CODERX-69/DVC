
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 900) {
            $(".head").css('background', '#576066');
        }
        else {
            $(".head").css("background", "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)");
        }
    })
})
 