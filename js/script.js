fillQuestion(40);



function fillQuestion(num){
    for (var i = 1; i <= num; i++) {
        var $d = $("<a href='#' class='numberItem'>" + i + "</a>");
        $("#strip").append($d);
    }
}

var items = $('.numberItem'),
    selectedIndex = 0,
    scroller = $("#numWrap"),
    scrollerWidth = scroller.width();

selectItem();

items.on('click', function(e) {
    e.preventDefault();
    selectedIndex = items.index($(this));
    selectItem();
});

$('.controls .btn').on('click', function() {
    var button = $(this);
    if (button.hasClass('prev') && selectedIndex > 0) {
        selectedIndex--;
    } else if (button.hasClass('next') && selectedIndex < items.length - 1) {
        selectedIndex++;
    }

   selectItem();
});

function selectItem() {
    var selected = items.eq(selectedIndex);
    items.removeClass('selected');
    selected.addClass('visited selected');
    focus(selected.position().left);
}

function focus(originalLeft) {
    scroll = originalLeft - (scrollerWidth / 2);
    scroller.stop().animate({
        scrollLeft: scroll
    }, 800);
}

// $(".wrapper").on("click", ".arrow", function() {
//     var stripPos = $strip.position();
//     if (this.id == "lft") {
//         $strip.css({"left": stripPos.left + (wrapWidth / 2)});
//     } else {
//         $strip.css({"left": stripPos.left - (wrapWidth / 2)});
//     }
// });


$("#lft-arrow").click(function () {
  var leftPos = $('#numWrap').scrollLeft();
$("#numWrap").animate({scrollLeft: leftPos - 200}, 800);
});

$("#rgt-arrow").click(function () {
  var leftPos = $('#numWrap').scrollLeft();
$("#numWrap").animate({scrollLeft: leftPos + 200}, 800);
});
