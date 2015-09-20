var toggleSpeed = 250;
var listCollapsed = false;
var collapseListText = "Collapse all";
var expandListText = "Expand all";

$(document).ready(function () {
    $("img[alt='hamburger']").click(function () {
        $("div#side-bar-left ul").toggle();
    });

    $("h4").parent().click(function (event) {
        var column = $(event.target).closest("div.column");
        $(column).find("ul").toggle(toggleSpeed);
        $(column).find("p.col-description").toggle(toggleSpeed);
    });

    $("div#collapse-btn").click(function () {
        toggleCollapsed("div#collapse-btn h3");
    });
});

function toggleCollapsed(element) {
    if (listCollapsed)
    {
        $("div.column ul").show();
        $("p.col-description").show();
        $(element).text(collapseListText);
        listCollapsed = false;
        $("div.super-row").addClass("bot-pad");
    }
    else
    {
        $("div.column ul").hide();
        $("p.col-description").hide();
        $(element).text(expandListText);
        listCollapsed = true;
        $("div.super-row").removeClass("bot-pad");
    }
}
;

