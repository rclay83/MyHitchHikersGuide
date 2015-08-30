var toggleSpeed = 250;
var listState = {expand: "Expand all", collapse: "Collapse all"};
var listStatus = listState.expand;

$(document).ready(function () {
    $("img[alt='hamburger']").click(function () {
        $("div#side-bar-left a").toggle();
    });

    $("h4").click(function (event) {
        var column = $(event.target).closest("div.column");
        $(column).find("ul").toggle(toggleSpeed);
        $(column).find("p.col-description").toggle(toggleSpeed);
    });

    $("div#side-bar-left div").click(function () {
        
        if (listStatus === listState.expand)
        {
            $("div.column ul").show();
            $("p.col-description").show();
            $(event.target).text(listState.collapse);
            listStatus = listState.collapse;
            $("div.super-row").addClass("bot-pad");
        }
        else
        {
            $("div.column ul").hide();
            $("p.col-description").hide();
            $(event.target).text(listState.expand);
            listStatus = listState.expand;
            $("div.super-row").removeClass("bot-pad");
        }
    });
});