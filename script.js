$(".speed").click(function () {
    if ($(".speed:checked").val() == "slow") {
        $(".needle").addClass("slow")
            .removeClass("medium")
            .removeClass("fast");
    } else if ($(".speed:checked").val() == "medium") {
        $(".needle").addClass("medium")
            .removeClass("slow")
            .removeClass("fast");
    } else if ($(".speed:checked").val() == "fast") {
        $(".needle").addClass("fast")
            .removeClass("medium")
            .removeClass("slow");
    }
});
