$(document).ready(function(){
  var things = [1, 2, 3];
  var javaFirst;
  var javaSecond;
  var javaThird;
  $("button#buttonOne").click(function(){
    javaFirst = $("input#firstFav").val();
    javaSecond = $("input#secondFav").val();
    javaThird = $("input#thirdFav").val();

    things[0] = javaFirst;
    things[1] = javaSecond;
    things[2] = javaThird;


        $(".outputform1").text(things[0]);
        $(".outputform2").text(things[1]);
        $(".outputform3").text(things[2]);

        // $("button#buttonOne").toggle();
        // $("#hidden").show();

        event.preventDefault();
      });

  });
