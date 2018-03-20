var $corner = $(".corner"),
    $window = $(window);

$window.scroll(function() {    
    var scroll = $window.scrollTop();

    if (scroll >= 200 && scroll <= 400) {
      if($corner.hasClass("green")){
        $corner.removeClass("green");
      }
        $corner.addClass("blue");
    } else if (scroll >=400) {
      if($corner.hasClass("blue")){
        $corner.removeClass("blue");
      }
        $corner.addClass("green");
    } else {
        $corner.removeClass("blue");
    }
});