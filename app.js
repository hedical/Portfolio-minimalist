$(document).ready(function () {
    // INIT FUNCTIONS
    $("main").hide()
    $("#projects").hide()
    $("#experience").hide()
    $("#up").hide()
    loadingAnimation()

    function loadingAnimation() {
        window.setTimeout(function () {
            $(".animation").hide();
            $("main").show();
            $(".presentation").delay(1000).animate({ opacity: 1 }, 500);
        }, 3000)
    }

    window.onscroll = function (ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            $("#up").show()
            $("#down").hide()
        } else {
            $("#up").hide()
            $("#down").show()
        }


    };

})