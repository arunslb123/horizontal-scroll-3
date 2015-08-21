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


// $("#lft-arrow").click(function () {
//   var leftPos = $('#numWrap').scrollLeft();
// $("#numWrap").stop().animate({scrollLeft: leftPos - 200}, 800);
// });

// $("#rgt-arrow").click(function () {
//   var leftPos = $('#numWrap').scrollLeft();
// $("#numWrap").stop().animate({scrollLeft: leftPos + 200}, 800);
// });

// function leftArrow(){
//     console.log("in left")
//     var leftPos = $('#numWrap').scrollLeft();
// $("#numWrap").stop().animate({scrollLeft: leftPos - 200}, 800);
// }

// function rightArrow(){
//     var leftPos = $('#numWrap').scrollLeft();
// $("#numWrap").stop().animate({scrollLeft: leftPos + 200}, 800);
// }


var leftArrow=function(){
    console.log("in left")
    var leftPos = $('#numWrap').scrollLeft();
$("#numWrap").animate({scrollLeft: leftPos - 200}, 800);
}

var  rightArrow=function(){
    var leftPos = $('#numWrap').scrollLeft();
$("#numWrap").animate({scrollLeft: leftPos + 200}, 800);
}




// var throttledLeft = _.throttle(leftArrow, 100);
// var throttledRight=_.throttle(rightArrow,100);



// $("#lft-arrow").on('click',function () {
//     console.log("in leftttt")
// $("#numWrap").on('scroll',throttledLeft);
// });

// $("#rgt-arrow").on('click',function () {
// $("#numWrap").on('scroll',throttledRight);
// });

//$(window).on('scroll', throttledHandler);
// $("TEXTINPUT").keyup(_.throttle(function () {...}, 150));

$("#lft-arrow").click(_.throttle(leftArrow,1000));
$("#rgt-arrow").click(_.throttle(rightArrow,1000));
