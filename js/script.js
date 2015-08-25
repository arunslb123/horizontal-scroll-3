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


var leftArrow=function(){
    console.log("in left")
    var leftPos = $('#numWrap').scrollLeft();
$("#numWrap").animate({scrollLeft: leftPos - 200}, 500);
}

var  rightArrow=function(){
    var leftPos = $('#numWrap').scrollLeft();
$("#numWrap").animate({scrollLeft: leftPos + 200}, 500);
}



$("#lft-arrow").click(_.throttle(leftArrow,800));
$("#rgt-arrow").click(_.throttle(rightArrow,800));
