$(document).ready(function () {
    // INIT FUNCTIONS
    $("main").hide()
    $("#projects").hide()
    $("#experience").hide()
    loadingAnimation()

    function loadingAnimation() {
        window.setTimeout(function () {
            $(".animation").hide();
            $("main").show();
            $(".presentation").delay(1000).animate({ opacity: 1 }, 500);
        }, 3000)
    }

    $("#terminal").on("click", function () {
        $("#projects").show()
        $("#experience").show()
    })

})