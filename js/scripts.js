$(document).ready(function(){
  var things = [];

  $("button#buttonOne").click(function(){
    things.unshift($("input#thirdFav").val());
    things.unshift($("input#secondFav").val());
    things.unshift($("input#firstFav").val());
    //
    // things[0] = ;
    // things[1] = $("input#secondFav").val();
    // things[2] = $("input#thirdFav").val();


    $(".outputform1").text(things[0]);
    $(".outputform2").text(things[1]);
    $(".outputform3").text(things[2]);

    $(".fullList").text(things);
        event.preventDefault();
      });

  });
