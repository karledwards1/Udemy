// $("h1").append("<button>Button</button>");

$("h1").click(function(){

  for (var i = 0; i < 6; i++) {
    if (i === 1) {
      $("div").html("h");
    } else if (i === 2) {
      $("div").text("he");
    } else if (i === 3) {
      $("div").text("hel");
    } else if (i === 4) {
      $("div").text("hell");
    } else if (i === 5) {
      $("div").text("hello");
    }
  }

});

$("button").on("click", function(){
  $("h1").animate({opacity: 0.5});
});
